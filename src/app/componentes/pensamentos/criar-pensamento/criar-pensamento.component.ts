import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: ''
  }

  ngOnInit(): void{

  }

  criarPensamento(){
    alert("Comando Ok e funcional");
  }

  cancelarPensamento(){
    alert("Comando Ok e funcional");
  }
}
