import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChildComponent } from './components/child/child.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , HomeComponent , MenuBarComponent, LoginComponent , ProfileComponent,
        LifeCycleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ibm-ng-demo';

  employee = {
    name : 'Sri varshini',
    salary : 32000,
    isIndian : true
  }

}
