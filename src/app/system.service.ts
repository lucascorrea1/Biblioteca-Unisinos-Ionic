import { Injectable } from '@angular/core';

export const BIBLIOTECARIO = 1;
export const LEITOR = 2;

@Injectable({
  providedIn: 'root'
})

export class SystemService {
  logado: any;
  usuarios: any[]; 
  livros: any[]; 
  livro: any;
  evento: any;
  
  constructor() {
    this.usuarios = [
      { id:1, nome: 'José Cláudio', email: 'joseclaudio@tal.com', senha:'123456', perfil:BIBLIOTECARIO },
      { id:2, nome: 'Cláudio José', email: 'claudiojose@tal.com', senha:'123456', perfil:LEITOR }
    ];
    this.logado = null;
    this.evento = null;
  }

    login(email:string, senha:string) {
      for (let index = 0; index < this.usuarios.length; index++) {
        const usr = this.usuarios[index];

        //verifica na lista de usuarios se o login e senha informados batem com algum.
        if ((usr.email === email) && (usr.senha === senha)) {
          this.logado = usr;
          return;
        }
      }
      throw new Error("Usuário ou senha inválida. Por favor, tente novamente.");
    }

    salvar(titulo:string, tipo:string, ano:Date, status:string){
      if ((!titulo) || (titulo === '')) {
        throw new Error("Nome do evento deve ser preenchido");
      }
      if (!this.evento) {
        this.evento = 
        {
          titulo: titulo,
          tipo: tipo,
          ano: ano,
          status: status,
          livros: new Array(...this.livros)
        };
      } else {
        this.evento.titulo = titulo;
        this.evento.tipo = tipo;
        this.evento.ano = ano;
        this.evento.status = status;
        this.evento.livros = new Array(...this.livros);
      }

    }
    
}
