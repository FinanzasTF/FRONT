import { Component } from '@angular/core';

import { UserService } from '../services/user.service';
import { User } from 'src/assets/models/user';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    phoneNumber: ''
  };

  constructor(private userService: UserService, private router: Router) { }

  register() {
    console.log(this.user)
    this.userService.addUser(this.user).subscribe(
      (response) => {
        // Lógica de manejo de respuesta de registro exitoso
        console.log(response);
        this.router.navigate(['/login']);
      },
      (error) => {
        // Lógica de manejo de error de registro
        console.error(error);
      }
    );

    

  }
}
