import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { ProductsComponent } from '../pages/products/products.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
];
