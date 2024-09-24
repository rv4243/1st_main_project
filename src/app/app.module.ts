import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Routing module (if you have one)
import { RouterModule } from '@angular/router';  // Import RouterModule
import { AppComponent } from './app.component';

import { DataService } from './service/data.service'; // Import your service


@NgModule({
  declarations: [
    // AppComponent
   ],
  imports: [
    BrowserModule,  // Required for running the app in the browser
    AppRoutingModule,  // Import your routing module if you have it
    RouterModule,

  ],
  providers:[DataService]
})
export class AppModule { }

