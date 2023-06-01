import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { OfferComponent } from '../offer/offer.component';
import { CartComponent } from '../cart/cart.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];