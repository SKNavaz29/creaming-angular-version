import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent {
  constructor(
    private dialogRef: MatDialog, 
) { }

  closeoffer() {
    this.dialogRef.closeAll();
  }

}
