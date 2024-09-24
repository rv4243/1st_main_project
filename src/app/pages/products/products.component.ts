import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';




@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,MatToolbarModule,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  imageList = [
    {
      title: 'Sunset Over the Beach',
      description: 'A beautiful sunset over a calm beach.',
      imageUrl: 'assets/img1.jpeg',
      route: '/card1'
    },
    {
      title: 'Mountain Peaks',
      description: 'Snow-covered mountain peaks under a clear sky.',
      imageUrl: 'assets/img2.jpeg',
      route: '/card12'
    },
    {
      title: 'Forest Path',
      description: 'A peaceful path through a lush green forest.',
      imageUrl: 'assets/img3.jpeg',
      route: '/card3'
    },
    {
      title: 'Sunset Over the Beach',
      description: 'A beautiful sunset over a calm beach.',
      imageUrl: 'assets/img4.jpeg',
      route: '/card4'
    },
    {
      title: 'Mountain Peaks',
      description: 'Snow-covered mountain peaks under a clear sky.',
      imageUrl: 'assets/img5.jpeg',
      route: '/card4'

    },
    {
      title: 'Forest Path',
      description: 'A peaceful path through a lush green forest.',
      imageUrl: 'assets/img6.jpeg',
      route: '/card4'

    },
    {
      title: 'Sunset Over the Beach',
      description: 'A beautiful sunset over a calm beach.',
      imageUrl: 'assets/img7.jpeg',
      route: '/card4'

    },
    {
      title: 'Mountain Peaks',
      description: 'Snow-covered mountain peaks under a clear sky.',
      imageUrl: 'assets/img8.jpeg',
      route: '/card4'

    },
    {
      title: 'Forest Path',
      description: 'A peaceful path through a lush green forest.',
      imageUrl: 'assets/img9.jpeg',
      route: '/card4'

    },
    
  ];
  constructor(private router: Router) { }

  onCardClick(route: string) {
    this.router.navigate([route]);
  }
}
