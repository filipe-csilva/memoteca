import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(private service: PensamentoService){

  }

  ngOnInit(): void{

  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe()
    alert("Pensamento criado com sucesso");
  }

  cancelarPensamento(){
    alert("Comando Ok e funcional");
  }
}
