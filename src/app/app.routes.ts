import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { authGuard } from './guards/auth.guard';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { EmployeComponent } from './components/employe/employe.component';


export const routes: Routes = [
    {path: 'login' , component: LoginComponent},
    {path : 'register' , component : RegisterComponent},
    {path : 'profile' , component : ProfileComponent , canActivate: [authGuard]},
    {path : 'life' , component : LifeCycleComponent , canActivate: [authGuard]},
    { path: 'edit', component: EditProfileComponent , canActivate: [authGuard]},
    {path: 'logout' , component : LogoutComponent , canActivate: [authGuard]},
    { path: '', component: HomeComponent },
    { path: 'emp', component: EmployeComponent },
];
