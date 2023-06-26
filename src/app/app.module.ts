import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculoComponent } from './calculo/calculo.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HeadingComponent } from './heading/heading.component';
import { HttpClientModule } from '@angular/common/http';

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

import { MatCardModule } from '@angular/material/card';


import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PerfilComponent } from './perfil/perfil.component';
import {MatDialogModule} from '@angular/material/dialog';


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
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    
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
    MatMenuModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }