import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-logar',
  imports: [MatFormFieldModule,MatInputModule,MatSelectModule,MatOptionModule,MatButtonModule],
  templateUrl: './logar.component.html',
  styleUrl: './logar.component.css'
})
export class LogarComponent {

  loginForm = new FormGroup({
     Email: new FormControl('', Validators.required),
     Senha: new FormControl('', Validators.required),
     Role: new FormControl('', Validators.required) 
  });

  onLogin() {
    if (this.loginForm.valid) {
    const loginData = this.loginForm.value;
    console.log('Enviando login:', loginData);
    // Chamar backend: this.authService.login(loginData).subscribe(...)
   }
  }
}
