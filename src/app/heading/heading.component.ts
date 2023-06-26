import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { PerfilComponent } from '../perfil/perfil.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent {
  constructor(private dialog: MatDialog, private router: Router) { }

  openFloatingWindow(): void {
    const dialogRef = this.dialog.open(PerfilComponent);

    // Opcional: Puedes subscribirte al evento 'afterClosed' para realizar acciones después de cerrar la ventana flotante.
    dialogRef.afterClosed().subscribe(result => {
      // Lógica adicional después de cerrar la ventana flotante
    });
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
}
