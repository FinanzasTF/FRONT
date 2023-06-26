import { Component } from '@angular/core';

import { FormBuilder, FormGroup, NgModel, Validators  } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Prestamo } from 'src/assets/models/Prestamo';
import { Anualidad } from 'src/assets/models/Anualidad';
import { ContentObserver } from '@angular/cdk/observers';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css'],
})
export class CalculoComponent {
  calendario: boolean = false;


  // camposIncompletos: boolean =true

  prestamo: any;

  datos: FormGroup;

  resultado!:any
  
  anualidad!: Anualidad
  TiempoPeriodoGraciaSend!: number
  interesPeriodoGraciaParcialSend!:number
  TipoPeriodoGraciaSend:string=''
  constructor(private fb: FormBuilder) {
    // this.datos = this.fb.group({
    //   tasaEfectivaAnual: ['0.0060449190', Validators.required],
    //   frecuenciaPago: ['', Validators.required],
    //   fechaPrestamo: ['', Validators.required],
    //   unidadTiempo: ['', Validators.required],
    //   tipoPeriodoGracia: ['', Validators.required],
    //   tiempoPeriodoGracia: ['', Validators.required],
    //   duracionPrestamo: ['36', Validators.required],
    //   montoPrestamo: ['42199', Validators.required],
    //   moneda: ['', Validators.required],
    //   MontoBonoFondoMiVivienda:[''],
    // })
    // this.datos = this.fb.group({
    //   tasaEfectivaAnual: ['27', Validators.required],
    //   frecuenciaPago: ['Mensual', Validators.required],
    //   fechaPrestamo: ['05/05/2020', Validators.required],
    //   unidadTiempo: ['Años', Validators.required],
    //   duracionPrestamo: ['3', Validators.required],
    //   montoPrestamo: ['20000', Validators.required],
    //   MontoBonoFondoMiVivienda:[''],
    //   tipoTasa:['Anual', Validators.required],
    //   seguroDesgramen:['0.420809'],
    //   tipoTasaDesgravamen:['Anual'],

    //   TiempoPeriodoGracia:['2'],
    //   TipoPeriodoGracia:['Total'],
    //   UnidadPeriodoGracia:['Anual'],
    // })
    this.datos = this.fb.group({
      tasaEfectivaAnual: ['', Validators.required],
      frecuenciaPago: ['', Validators.required],
      fechaPrestamo: ['', Validators.required],
      unidadTiempo: ['', Validators.required],
      duracionPrestamo: ['', Validators.required],
      montoPrestamo: ['', Validators.required],
      MontoBonoFondoMiVivienda:[''],
      tipoTasa:['', Validators.required],
      seguroDesgramen:[''],
      tipoTasaDesgravamen:[''],

      TiempoPeriodoGracia:[''],
      TipoPeriodoGracia:[''],
      UnidadPeriodoGracia:[''],
    })
  }



  onSubmit() {
    // Aquí puedes acceder a los valores ingresados
    // console.log(this.tasaEfectivaAnual);
  }

  mostrar(aaa: any) {

  }
 
  saveData() {
    this.prestamo = new Prestamo(
      this.datos.value.tasaEfectivaAnual,this.datos.value.frecuenciaPago,
      this.datos.value.fechaPrestamo,
      this.datos.value.unidadTiempo,
      this.datos.value.duracionPrestamo,
      this.datos.value.montoPrestamo,
      this.datos.value.MontoBonoFondoMiVivienda,
      this.datos.value.tipoTasa,
      this.datos.value.seguroDesgramen,
      this.datos.value.tipoTasaDesgravamen,
      this.datos.value.TiempoPeriodoGracia,
      this.datos.value.TipoPeriodoGracia,
      this.datos.value.UnidadPeriodoGracia

    )

    
    this.TiempoPeriodoGraciaSend = this.prestamo.TiempoPeriodoGracia
    this.prestamo.calcular()
    this.resultado = this.prestamo.anualidad
    this.interesPeriodoGraciaParcialSend = this.prestamo.interesPeriodoGraciaParcial
    this.interesPeriodoGraciaParcialSend = parseFloat(this.interesPeriodoGraciaParcialSend.toFixed(2))
    this.TipoPeriodoGraciaSend = this.prestamo.TipoPeriodoGracia
    let sendTasa = this.prestamo.tasaCalculo*100
    sendTasa = parseFloat(sendTasa.toFixed(3))
    this.anualidad = new Anualidad(this.prestamo.anualidad,
      this.prestamo.fechasEmision,
      this.prestamo.fechasVencimiento,
      this.prestamo.tasaEfectivaAnual, sendTasa.toString())
  }

}

