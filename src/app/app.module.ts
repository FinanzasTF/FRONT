import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculoComponent } from './calculo/calculo.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HeadingComponent } from './heading/heading.component';

//material
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {MatIconModule} from '@angular/material/icon';
import { VivendaComponent } from './vivenda/vivenda.component';
import { InteresComponent } from './interes/interes.component';
import { AmortizacionComponent } from './amortizacion/amortizacion.component';
import {MatButtonModule} from '@angular/material/button';



import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    CalculoComponent,
    CalendarComponent,
    HeadingComponent,
    MenuComponent,
    VivendaComponent,
    InteresComponent,
    AmortizacionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
