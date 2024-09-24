import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductsComponent } from './pages/products/products.component';
import { Card1PageComponent } from './card1-page/card1-page.component';
import { Card2PageComponent } from './card2-page/card2-page.component';
import { Card3PageComponent } from './card3-page/card3-page.component';
import { Card4PageComponent } from './card4-page/card4-page.component';

export const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'product', component:ProductsComponent},
  { path: 'card1', component: Card1PageComponent },
  { path: 'card2', component: Card2PageComponent },
  { path: 'card3', component: Card3PageComponent },
  { path: 'card4', component: Card4PageComponent }



];
