import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FuncionariosService } from '../../funcionarios.service';
import { Funcionario } from '../../Funcionario';


@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  
  constructor(private funcionariosService : FuncionariosService) { }

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
    const funcionario : Funcionario = this.formulario.value;
    this.funcionariosService.cadastrar(funcionario).subscribe(result => {
      alert('Sucesso.');
    })
  } 
}
