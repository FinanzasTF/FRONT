import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CalculoComponent } from './calculo/calculo.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { VivendaComponent } from './vivenda/vivenda.component';
import { InteresComponent } from './interes/interes.component';
import { AmortizacionComponent } from './amortizacion/amortizacion.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'registrar', component: RegisterComponent},
  {path:'perfil', component: PerfilComponent},
  // {path:'fondo_mi_vivienda', component:VivendaComponent},
  {path:'calculo_cuota', component: CalculoComponent},
  // {path:'calculo_intereses', component: InteresComponent},
  // {path:'beneficio_amortizacion', component: AmortizacionComponent},
  {path: '**', redirectTo: 'calculo_cuota', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 