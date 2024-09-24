import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'product', component:ProductsComponent}



];
