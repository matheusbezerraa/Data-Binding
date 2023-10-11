import { Component } from '@angular/core';


@Component({
  selector: 'app-exercicio',
  templateUrl: './exercicio.component.html',
  styleUrls: ['./exercicio.component.css']
})

export class ExercicioComponent {


  mensagem = "Olá, mundo!";
  link = "www.google.com";
  corDefundo: string = "blue";
  corDafonte: string = "black";
  opcaoSelecionada: string = "";

  alterarCor(){
    if(this.corDefundo === 'blue'){
      this.corDefundo = 'green';
      this.corDafonte = 'white';
    }
    else{this.corDefundo = 'blue';
        this.corDafonte = 'black';
  }

}
  

}
