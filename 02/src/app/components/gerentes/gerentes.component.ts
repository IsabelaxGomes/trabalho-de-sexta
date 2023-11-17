import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GerentesService } from '../../gerentes.service';
import { Gerente } from '../../Gerente';


@Component({
  selector: 'app-gerentes',
  templateUrl: './gerentes.component.html',
  styleUrls: ['./gerentes.component.css']
})
export class GerentesComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  
  constructor(private gerentesService : GerentesService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Funcionario';
    this.formulario = new FormGroup({
      _nome: new FormControl(null),
      _departamento: new FormControl(null),
      _nivel: new FormControl(null),
      
    })
  }
  enviarFormulario(): void {
    const gerente : Gerente = this.formulario.value;
    this.gerentesService.cadastrar(gerente).subscribe(result => {
      alert('Sucesso.');
    })
  } 
}
