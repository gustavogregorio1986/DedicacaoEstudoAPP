import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { RodapeComponent } from '../rodape/rodape.component';

@Component({
  selector: 'app-logar',
  imports: [FormsModule, ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatOptionModule,MatButtonModule, RodapeComponent],
  templateUrl: './logar.component.html',
  styleUrl: './logar.component.css'
})
export class LogarComponent implements AfterViewInit{

  loginForm = new FormGroup({
    Email: new FormControl('', Validators.required),
    Senha: new FormControl('', Validators.required),
    Role: new FormControl('', Validators.required),
  });

  constructor(private cd: ChangeDetectorRef){ }

  ngAfterViewInit() {
      this.cd.detectChanges();
    requestAnimationFrame(() => {
      document.body.offsetHeight; // força reflow
    });
  }

  onLogin() {
    if(this.loginForm.valid) {
      console.log('Dados do login:', this.loginForm.value);
      // lógica do login
    }
  }
}
