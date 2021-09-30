import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-bibliotecario',
  templateUrl: './bibliotecario.page.html',
  styleUrls: ['./bibliotecario.page.scss'],
})
export class BibliotecarioPage implements OnInit {

  nome: string;
  titulo: string;
  tipo: string;
  autores: string;
  ano: Date;
  livros: any[];
  status: string;
  mensagem: string;

  constructor(private srv:SystemService, private router:Router) {}

  ngOnInit() {
    if(this.srv.livro) {
      this.titulo = this.srv.livro.titulo;
      this.tipo = this.srv.livro.tipo;
      this.autores = this.srv.livro.autores;
      this.ano = this.srv.livro.ano;
      this.status = this.srv.livro.status;
      this.livros = new Array(...this.livros);
    }
    else {

      if(this.srv.evento) {
        this.titulo = this.srv.evento.titulo;
        this.tipo = this.srv.evento.tipo;
        this.ano = this.srv.evento.ano;
        this.status = this.srv.evento.status;
        this.livros = new Array(...this.livros);
      } else {
        this.livros = [];
        this.ano = new Date();
      }

    }
  }

  aceitar(){

  }

  recusar(){

  }

  salvar(){
    try {
      this.srv.salvar(this.titulo, this.tipo, this.ano, this.status);
      this.mensagem = "Salvo com sucesso!"
    } catch (error) {
      this.mensagem = error;
    }
  }

  sair(){
    this.router.navigate(['/home']);
  }

}
