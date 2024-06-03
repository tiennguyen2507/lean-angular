import { Routes } from '@angular/router';
import { ButtonComponent } from '../components/atoms/button/button.component';
import { LoginComponent } from '../pages/login/login.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
];
