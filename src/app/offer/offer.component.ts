import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent {

  constructor(
        private dialogRef: MatDialog, 
  ) { }

  closeoffer() {
    this.dialogRef.closeAll();
  }
}
