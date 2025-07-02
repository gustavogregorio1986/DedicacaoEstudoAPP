import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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

   usuarioForm: FormGroup;
  botaoDesabilitado = false;
  mensagemSucesso = '';
  mensagemErro = '';

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {
    this.usuarioForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Senha: ['', Validators.required],
      Role: ['', Validators.required]
    });
  }

  onSubmit() {
    this.botaoDesabilitado = true;

    if (this.usuarioForm.valid) {
      const usuario = new Usuario(
        undefined,
        this.usuarioForm.value.Email,
        this.usuarioForm.value.Senha,
        this.usuarioForm.value.Role
      );

      this.usuarioService.cadastrar(usuario).subscribe({
  next: (res) => {
    this.mensagemSucesso = 'Usuário cadastrado com sucesso!';
    this.mensagemErro = '';
    this.botaoDesabilitado = false;
    this.usuarioForm.reset();
  },
  error: (err) => {
    console.error('Erro ao cadastrar usuário', err);
    console.log('Status:', err.status);
    console.log('Error:', err.error);
    this.mensagemErro = `Erro ao cadastrar usuário: ${err.message}`;
    this.mensagemSucesso = '';
    this.botaoDesabilitado = false;
  }
});

      console.log('Usuário criado:', usuario);
    } else {
      this.mensagemErro = 'Formulário inválido!';
      this.mensagemSucesso = '';
      this.botaoDesabilitado = false;
    }
  }
  
}
