import { Component, Inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string = '';
  password: string = '';

  // constructor(@Inject(UserService) private userService: UserService) { }
  constructor(private userService: UserService, private router: Router) { }

  login() {
    // Lógica para iniciar sesión
    this.userService.login(this.name, this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/calculo_cuota']);
        let usuario = JSON.stringify(data);
        localStorage.setItem('usuario',usuario) // Maneja la respuesta de la API según tus necesidades
      },
      error => {
        console.error(error); // Maneja el error de la solicitud
      }
    );
    
  }

  forgotPassword() {
    // Lógica para el restablecimiento de contraseña
    // Puedes implementar aquí la lógica necesaria para enviar un correo electrónico con instrucciones de restablecimiento de contraseña o cualquier otra acción relacionada con el olvido de contraseña.
    console.log('Se ha solicitado el restablecimiento de contraseña.');
  }
}
