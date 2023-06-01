import { Injectable } from '@angular/core';
import { Item } from '../shared/item';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { baseURL } from '../shared/baseurl';
import { HttpHeaders } from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { ItemService } from './item.service';
import { Params,ActivatedRoute } from '@angular/router';
import { Component, OnInit,Inject } from '@angular/core';
import { DatePipe, Location } from '@angular/common';




@Injectable({
  providedIn: 'root'
})


export class CartService {
  constructor(private itemService:ItemService,private route:ActivatedRoute, private location:Location,
    @Inject('BaseURL') public BaseURL,
    private httpClient: HttpClient,private ProcessHTTPMsgService:ProcessHTTPMsgService
  ) {}


    cItems: Item[] = [];
    public items = new Subject();
    
    getItems(): Observable<any> {
      
      return this.items.asObservable();
    }


  addToCart(item) {

        this.cItems.push(item);

    
    this.items.next(this.cItems);
  }

  removeProductFromCart(itemId) {
    this.cItems.map((item, index) => {
      if (item.id === itemId) {
        this.cItems.splice(index, 1);
      }
    });

    this.items.next(this.cItems);
  }


  emptryCart() {
    this.cItems.length = 0;
    this.items.next(this.cItems);
  }



  getTotalPrice() {
   let   total:number=0;
    this.cItems.map((item) => {
      total += item.price;
    });

    return total;
  }



  
}
