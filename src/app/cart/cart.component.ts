import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Subject,Observable } from 'rxjs';
import { ItemService } from '../services/item.service';
import { MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items=this.cartService.cItems;
  totalQuantity=this.items.length;
  totalamount!:number;
  



  constructor(
    private cartService: CartService, private dialogRef: MatDialog, private itemService:ItemService
  ) { }

  get Total(){
    let total = 0;
    for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].price) {
            total += this.items[i].price;
            this.totalamount = total;
        }
    }
    return total;
}

deleteItem(id) {
  let index = this.items.findIndex(item => item.id === id);
  this.items.splice(index, 1);
  this.totalQuantity-=1;

}

closeModal() {
  this.dialogRef.closeAll();
}
 
}
