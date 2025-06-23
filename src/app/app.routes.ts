import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LogarComponent } from './logar/logar.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'logar', component: LogarComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
