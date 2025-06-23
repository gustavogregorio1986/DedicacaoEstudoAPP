import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu/menu.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { MatSidenavContainer, MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MatSidenavContainer, MatSidenavModule, RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

}
