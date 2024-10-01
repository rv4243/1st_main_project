import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { SidenavComponent } from './sidenav/sidenav.component';





// import { Card1PageComponent } from './card1-page/card1-page.component';

import { DataService } from './service/data.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    
    
    

   ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    NavbarComponent,
    SidenavComponent,
    AppComponent, 
    NavbarComponent,
    ProductsComponent, 
    RouterModule.forRoot(routes),
    
    
    
    

  ],
  providers:[DataService]
  bootstrap: [] 
})
export class AppModule { }

