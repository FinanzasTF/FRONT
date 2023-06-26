import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinanzasTf';
  constructor(public router: Router){
    // if (localStorage.length!=0) {
    //   this.aux1=!this.aux1
    // }
  }
}
