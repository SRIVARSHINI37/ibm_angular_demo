import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerData = { username: '', password: '' };

  postRegisterMessage: string = '';

  constructor(private userService: UserService) { }

  submitRegister(registerForm: any) {
    if (registerForm.valid) {
      console.log(registerForm.value);  // Access form data using registerForm.value
      this.userService.register(registerForm.value)
        .subscribe({
          next: (response) => {
            console.log(response);
            this.postRegisterMessage = `Hi ${response.username}! You've registered successfully.`;
            this.registerData = { username: '', password: '' };
          },
          error: (error) => {
            console.log(error);
            if (error.status === 400) {
              this.postRegisterMessage = 'Username already exists!';
            } else {
              this.postRegisterMessage = error.statusText;
            }
            this.registerData = { username: '', password: '' };
          }
        });
    }
  }
}
