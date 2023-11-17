import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FuncionarioADMsService } from '../../funcionario-adms.service';
import { FuncionarioADM } from '../../FuncionarioADM';


@Component({
  selector: 'app-funcionario-adms',
  templateUrl: './funcionario-adms.component.html',
  styleUrls: ['./funcionarios-adms.component.css']
})
export class FuncionarioADMsComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  
  constructor(private funcionarioADMsService : FuncionarioADMsService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Funcionario';
    this.formulario = new FormGroup({
      _nome: new FormControl(null),
      _cpf: new FormControl(null),
      _cargo: new FormControl(null),
      _idade: new FormControl(null)
    })
  }
  enviarFormulario(): void {
    const funcionarioADMs : FuncionarioADM = this.formulario.value;
    this.funcionarioADMsService.cadastrar(funcionarioADMs).subscribe(result => {
      alert('Sucesso.');
    })
  } 
}
