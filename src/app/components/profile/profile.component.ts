import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { UserService } from '../../../services/user.service';
import { response } from 'express';
import { error } from 'node:console';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule , CommonModule , EditProfileComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

profileData  : any;
constructor(private userService : UserService){
}
 ngOnInit() {
        this. userService.getProfile().subscribe({
          next: (response: any) => {
            this.profileData = JSON.parse(response);
          },
          error: (error: any) => {
            console.error(error);
          }
        });
 }

 onProfileUpdated(updatedData: any) {
  this.profileData = updatedData;
}
}

//   isClicked : boolean = false;
//   tempData: any;
//   userData :any
//   constructor() {
//   this.userData = {
//     name : "Sri varshini",
//     email : "ravarshini456@gmail.com",
//     salary : 32000,
//     aadhaar : 123456789012,
//     phone : 6369106671 ,
//     avatar : 'https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg'
//   }
//   this.tempData = JSON.parse(JSON.stringify(this.userData));
// }
//   onClick(){
//     this.userData = JSON.parse(JSON.stringify(this.tempData));
//   }

