import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BIBLIOTECARIO, SystemService } from '../system.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string;
  senha: string;
  mensagem: string;

  constructor(private srv:SystemService, private router: Router) {}

  login(){
    try {
      this.srv.login(this.email, this.senha);
      if (this.srv.logado.perfil === BIBLIOTECARIO){
        this.router.navigate(['/bibliotecario']);
      }

      this.mensagem = this.srv.logado.nome;
    } catch(error) {
      this.mensagem = error; //mensagem recebe o erro.
    }
    
  }

}
