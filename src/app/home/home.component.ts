import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu/menu.component';
import { RodapeComponent } from '../rodape/rodape.component';
@Component({
  selector: 'app-home',
  imports: [RodapeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  imagemm = 'https://poderdaescuta.com/wp-content/uploads/2023/05/por-que-trabalhar-em-equipe-poder-da-escuta.jpg'
  imagemAlt = 'trabalhar'
}
