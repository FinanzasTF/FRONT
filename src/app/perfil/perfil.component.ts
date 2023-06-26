import { Component } from '@angular/core';
import { User } from 'src/assets/models/user';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  user: User = {
    id:0,
    name: '-',
    email: '-',
    password:'-',
    phoneNumber: '-'
  };
constructor() {
  const userString = localStorage.getItem('usuario');

if (userString) {
  // Convertir la cadena de texto JSON en un objeto
   this.user = JSON.parse(userString);

  // Utilizar el objeto
  console.log(this.user.id);
  console.log(this.user.name);
  console.log(this.user.email);
  console.log(this.user.password);
  console.log(this.user.phoneNumber);
} else {
  console.log('No se encontró ningún objeto User en el localStorage.');
}
}
  

}
