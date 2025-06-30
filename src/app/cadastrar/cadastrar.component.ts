import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { RodapeComponent } from '../rodape/rodape.component';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-cadastrar',
  imports: [ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule, MatSelectModule, FormsModule, CommonModule, RodapeComponent],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {
   usuarioForm = new FormGroup({
      Id: new FormControl('', Validators.required),
      Email: new FormControl('', Validators.required),
      Senha: new FormControl('', Validators.required),
      Role: new FormControl('', Validators.required) // corrigido aqui
    });


    onSubmit() {
     if (this.usuarioForm.valid) {
     const usuario: Usuario = new Usuario(
      this.usuarioForm.value.Id!,
      this.usuarioForm.value.Email!,
      this.usuarioForm.value.Senha!,
      this.usuarioForm.value.Role!
    );
    
      console.log('Usuário criado:', usuario);
    } else {
      console.log('Formulário inválido!');
    }
  }
}
