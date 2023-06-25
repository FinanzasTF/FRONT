import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
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
    this.datos = this.fb.group({
      tasaEfectivaAnual: ['', Validators.required],
      frecuenciaPago: ['', Validators.required],
      fechaPrestamo: ['', Validators.required],
      unidadTiempo: ['', Validators.required],
      duracionPrestamo: ['', Validators.required],
      montoPrestamo: ['', Validators.required],
      MontoBonoFondoMiVivienda:[''],
      tipoTasa:['', Validators.required],
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
      this.datos.value.tipoTasa
    )

    this.prestamo.duracionPrestamoToFrecuenciaPago()
    this.prestamo.mostrar()
    this.prestamo.calcular()
    this.resultado = this.prestamo.anualidad
    this.anualidad = new Anualidad(parseInt(this.prestamo.anualidad),
      this.prestamo.fechasEmision,
      this.prestamo.fechasVencimiento,
      this.prestamo.tasaEfectivaAnual)
  }

}

