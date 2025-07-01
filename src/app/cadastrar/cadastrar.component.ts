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

   mensagemSucesso: string = '';
   mensagemErro: string = '';

   usuarioForm = new FormGroup({
      Email: new FormControl('', Validators.required),
      Senha: new FormControl('', Validators.required),
      Role: new FormControl('', Validators.required) // corrigido aqui
    });

    constructor(private usuarioService: UsuarioService){}

    botaoDesabilitado = false;

    onSubmit() {
  this.botaoDesabilitado = true;

  if (this.usuarioForm.valid) {
    const usuario: Usuario = new Usuario(
      undefined,
      this.usuarioForm.value.Email!,
      this.usuarioForm.value.Senha!,
      this.usuarioForm.value.Role!
    );

    this.usuarioService.cadastrar(usuario).subscribe({
      next: (res) => {
        this.mensagemSucesso = 'Usuário cadastrado com sucesso!';
        this.mensagemErro = '';
        this.botaoDesabilitado = false; // Habilita o botão novamente
        this.usuarioForm.reset();      // Opcional: limpa o formulário
      },
      error: (err) => {
        console.error('Erro ao cadastrar usuário', err);
        this.mensagemErro = 'Erro ao cadastrar usuário.';
        this.mensagemSucesso = '';
        this.botaoDesabilitado = false; // Habilita o botão mesmo em erro
      }
    });

    console.log('Usuário criado:', usuario);
  } else {
    this.mensagemErro = 'Formulário inválido!';
    this.mensagemSucesso = '';
    this.botaoDesabilitado = false; // Também libera o botão se inválido
  }
 }
  
}
