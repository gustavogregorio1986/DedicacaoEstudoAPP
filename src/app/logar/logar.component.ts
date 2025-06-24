import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-logar',
  imports: [ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatOptionModule,MatButtonModule],
  templateUrl: './logar.component.html',
  styleUrl: './logar.component.css'
})
export class LogarComponent {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
  });

  onLogin() {
    if(this.loginForm.valid) {
      console.log('Dados do login:', this.loginForm.value);
      // lógica do login
    }
  }
}
