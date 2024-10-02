import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  imageList : Array<any> = [];
  filteredList : Array<any> = [];
  doFilter(input: any = null) {
    if(input) {
      this.filteredList = (this.imageList && this.imageList.length > 0) ? this.imageList.filter((x:any) => {
        return (x && x.gender === input) ? true : false;
      }) : []
    } else {
      this.filteredList = this.imageList;
    }
  }

}
