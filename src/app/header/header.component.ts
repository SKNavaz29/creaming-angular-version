import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Observable } from 'rxjs';
import { CartComponent } from '../cart/cart.component';
import { OfferComponent } from '../offer/offer.component';
import { AboutusComponent } from '../aboutus/aboutus.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent {
  public cartCount: number = 0;

  constructor(
    private cartService: CartService, public dialog: MatDialog
  ) {}


  ngOnInit() {
    this.cartService.getItems().subscribe(item=>{
      this.cartCount = item.length;
    })
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(CartComponent, {
      width: '750x',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }


  openoffer(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(OfferComponent, {
      width: '250x',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openaboutus(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AboutusComponent, {
      width: '250x',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
   


}
