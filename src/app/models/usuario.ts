export class Usuario {
  Id: string;
  Email: string;
  Senha: string;
  Role: string;

  constructor(id: string, email: string, senha: string, role: string){
      this.Id = id;
      this.Email = email;
      this.Senha = senha;
      this.Role = role;
  }
  
}
