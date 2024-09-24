import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Routing module (if you have one)
import { RouterModule } from '@angular/router';  // Import RouterModule


@NgModule({
  declarations: [ ],
  imports: [
    BrowserModule,  // Required for running the app in the browser
    AppRoutingModule,  // Import your routing module if you have it
    RouterModule.forRoot([]),
  ],
})
export class AppModule { }
