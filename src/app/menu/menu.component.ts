import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit {
  activeButton: string = '';

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.setActiveButton();
    this.cdr.detectChanges();
  }

  setActiveButton(): void {
    const currentUrl = this.router.url;

    if (currentUrl === '/calculo_cuota') {
      this.activeButton = 'calculo_cuota';
    } else if (currentUrl === '/fondo_mi_vivienda') {
      this.activeButton = 'fondo_mi_vivienda';
    } else if (currentUrl === '/calculo_intereses') {
      this.activeButton = 'calculo_intereses';
    } else if (currentUrl === '/beneficio_amortizacion') {
      this.activeButton = 'beneficio_amortizacion';
    } else {
      this.activeButton = '';
    }
  }
}
