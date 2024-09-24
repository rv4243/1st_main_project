import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';



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
      imageUrl: 'assert/image.1.jpeg'
    },
    {
      title: 'Mountain Peaks',
      description: 'Snow-covered mountain peaks under a clear sky.',
      imageUrl: 'assets/image.1.jpeg'
    },
    {
      title: 'Forest Path',
      description: 'A peaceful path through a lush green forest.',
      imageUrl: 'assert/image.1.jpeg'
    },
    {
      title: 'Sunset Over the Beach',
      description: 'A beautiful sunset over a calm beach.',
      imageUrl: 'assert/image.1.jpeg'
    },
    {
      title: 'Mountain Peaks',
      description: 'Snow-covered mountain peaks under a clear sky.',
      imageUrl: 'assert/image.1.jpeg'
    },
    {
      title: 'Forest Path',
      description: 'A peaceful path through a lush green forest.',
      imageUrl: 'assert/image.1.jpeg'
    },
    {
      title: 'Sunset Over the Beach',
      description: 'A beautiful sunset over a calm beach.',
      imageUrl: 'assert/image.1.jpeg'
    },
    {
      title: 'Mountain Peaks',
      description: 'Snow-covered mountain peaks under a clear sky.',
      imageUrl: 'assert/image.1.jpeg'
    },
    {
      title: 'Forest Path',
      description: 'A peaceful path through a lush green forest.',
      imageUrl: 'assert/image.1.jpeg'
    },
    {
      title: 'Mountain Peaks',
      description: 'Snow-covered mountain peaks under a clear sky.',
      imageUrl: 'assert/image.1.jpeg'
    },
    {
      title: 'Mountain Peaks',
      description: 'Snow-covered mountain peaks under a clear sky.',
      imageUrl: 'assert/image.1.jpeg'
    },
    {
      title: 'Mountain Peaks',
      description: 'Snow-covered mountain peaks under a clear sky.',
      imageUrl: 'assert/image.1.jpeg'
    },
    {
      title: 'Mountain Peaks',
      description: 'Snow-covered mountain peaks under a clear sky.',
      imageUrl: 'assert/image.1.jpeg'
    },
    {
      title: 'Mountain Peaks',
      description: 'Snow-covered mountain peaks under a clear sky.',
      imageUrl: 'assert/image.1.jpeg'
    },
    {
      title: 'Mountain Peaks',
      description: 'Snow-covered mountain peaks under a clear sky.',
      imageUrl: 'assert/image.1.jpeg'
    },
    {
      title: 'Mountain Peaks',
      description: 'Snow-covered mountain peaks under a clear sky.',
      imageUrl: 'assert/image.1.jpeg'
    },
    {
      title: 'Mountain Peaks',
      description: 'Snow-covered mountain peaks under a clear sky.',
      imageUrl: 'assert/image.1.jpeg'
    },
    {
      title: 'Mountain Peaks',
      description: 'Snow-covered mountain peaks under a clear sky.',
      imageUrl: 'assert/image.1.jpeg'
    },
    {
      title: 'Mountain Peaks',
      description: 'Snow-covered mountain peaks under a clear sky.',
      imageUrl: 'assert/image.1.jpeg'
    }
  ];
}
