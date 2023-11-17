import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DiretorsService } from '../../diretors.service';
import { Diretor } from '../../Diretor';


@Component({
  selector: 'app-diretors',
  templateUrl: './diretors.component.html',
  styleUrls: ['./diretors.component.css']
})
export class DiretorsComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  
  constructor(private diretorsService : DiretorsService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Funcionario';
    this.formulario = new FormGroup({
      _nome: new FormControl(null),
      _departamento: new FormControl(null),
      area_atuacao: new FormControl(null),
      _nivel: new FormControl(null)

      
    })
  }
  enviarFormulario(): void {
    const diretor : Diretor = this.formulario.value;
    this.diretorsService.cadastrar(diretor).subscribe(result => {
      alert('Sucesso.');
    })
  } 
}
