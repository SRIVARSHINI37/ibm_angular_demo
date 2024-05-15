import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule , CommonModule , ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  loginForm: FormGroup;

  postLoginMessage: string = '';

  constructor(private fb: FormBuilder, private userService: UserService) {

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  submitLogin() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.userService.login(loginData)
        .subscribe({
          next: (response) => {
            console.log(response.user);
            this.userService.setProfile(JSON.stringify(response.user));
            this.postLoginMessage = `Hi ${response.user.username}! You've logged in successfully.`;
            this.loginForm.reset();
          },
          error: (error) => {
            console.log(error);
            this.postLoginMessage = error.statusText;
            this.loginForm.reset();
          }
        });
    } else {
      console.warn('Form is invalid');
    }
  }
  // name : string = '';
  // password : string = '';
  // message : string = ''
  // isSubmit : boolean = false;
  // isClicked(){
  //   this.isSubmit = true;
  //   if(this.name == "varshini" && this.password == "varshini"){
  //     this.message = `Hi ${this.name}! successfully logged in.`;
  //   }
  //   else{
  //     this.message = `Invalid Credentials`;
  //   }
  }


