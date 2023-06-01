import { Component, OnInit,Inject } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item} from '../shared/item';

import { Params,ActivatedRoute } from '@angular/router';
import { DatePipe, Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { CartService } from '../services/cart.service';
import { animate  } from '@angular/animations';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  Items!:Item[];
  errMess!:string;

  constructor(private itemService:ItemService,private route:ActivatedRoute,private cartService: CartService, private location:Location,
    @Inject('BaseURL') public BaseURL){   

    

  }

  addToCart(item: Item) {
    this.cartService.addToCart(item);
    window.alert('Your Item has been added to the cart!');
  }

  

    ngOnInit() {
      this.itemService.getItems()
      .subscribe(items=> this.Items = items,
      errmess => this.errMess = <any>errmess);
    }
}
