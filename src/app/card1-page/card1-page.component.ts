import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from '../pages/products/products.component';

@Component({
  selector: 'app-card1-page',
  standalone: true,
  imports: [
    FormsModule,
    ProductsComponent
  ],
  templateUrl: './card1-page.component.html',
  styleUrl: './card1-page.component.css'
})
export class Card1PageComponent {

  quantity: number = 1;

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    this.quantity++;
  }


}
