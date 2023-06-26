import { Component, Input, OnInit   } from '@angular/core';
import { Anualidad } from 'src/assets/models/Anualidad';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent{
  @Input() arregloDatos!: Anualidad;
  @Input() periodoTotal!: number;
  @Input() TipoPeriodoGraciaSend!: string;
  @Input() interesPeriodoGraciaParcialSend!: number;
  
  constructor() {
    
  }

  
  
}
