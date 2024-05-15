import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  // @Input()
  // updatedProfile  : any = {
  //   name : '',
  //   email : '',
  //   salary : '',
  //   aadhaar : '',
  //   phone : '',
  //   avatar :''
  // };
  @Input() profileData: any;
  @Output() profileUpdated = new EventEmitter<any>();

  username : string | undefined;
  name : string | undefined;
  email : string | undefined;
  salary : number | undefined;
  aadhaar : number | undefined;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}
  onSubmit() {
    this.profileUpdated.emit(this.profileData);
    console.log(this.profileData);
  }

}
