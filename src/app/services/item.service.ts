import { Injectable } from '@angular/core';
import {Item} from '../shared/item';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map,catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { HttpHeaders } from '@angular/common/http';
import { EventEmitter,Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient,
    private ProcessHTTPMsgService:ProcessHTTPMsgService) { }
    @Output() event = new EventEmitter();
    getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(baseURL + 'items')
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));
  }
  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(baseURL + 'items/' + id)
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));
  }

  getItemIds(): Observable<number[] | any> {
    return this.getItems().pipe(map(Items => Items.map(item => item.id)))
      .pipe(catchError(error => error));
  }

  putDish(item: Item): Observable<Item> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Item>(baseURL + 'items/' + item.id, item, httpOptions)
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));

  }

}
