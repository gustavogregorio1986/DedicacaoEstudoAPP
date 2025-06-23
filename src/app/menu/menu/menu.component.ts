import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-menu',
  imports: [MatSidenavModule,MatListModule,RouterModule,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
