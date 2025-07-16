import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { RodapeComponent } from '../rodape/rodape.component';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
@Component({
  selector: 'app-logar',
  imports: [FormsModule, ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatOptionModule,MatButtonModule, RodapeComponent],
  templateUrl: './logar.component.html',
  styleUrl: './logar.component.css'
})
export class LogarComponent implements AfterViewInit{

  loginForm!: FormGroup;

  constructor(private cd: ChangeDetectorRef, 
              private fb: FormBuilder, 
              private router: Router, private usuarioService: UsuarioService){
   this.loginForm = this.fb.group({
    Email: ['', [Validators.required, Validators.email]],
    Senha: ['', Validators.required],
    Role: ['', Validators.required]
     });  
   }

  

  ngAfterViewInit() {
      this.cd.detectChanges();
    requestAnimationFrame(() => {
      document.body.offsetHeight; // força reflow
    });
  }

   onLogin() {
    if (this.loginForm.valid) {
      const payload = {
        email: this.loginForm.value.Email,
        senha: this.loginForm.value.Senha,
        role: this.loginForm.value.Role,
      };

      console.log('Payload para API:', payload);


  this.usuarioService.login(payload).subscribe({
    next: (response) => {
      const token = response.token;

     // decodifica o token
     const decoded: any = jwtDecode(token);

      const role = decoded.role;

      if (role === 'adm') {
        this.router.navigate(['/admin']);
      } else if (role === 'usu') {
        this.router.navigate(['/usuario']);
      } else {
        this.router.navigate(['/login']);
      }
    },
    error: (error) => {
      console.error('Erro no login:', error);
    }
   });

    } else {
      console.log('Form inválido:', this.loginForm.errors);
    }
  }
}
