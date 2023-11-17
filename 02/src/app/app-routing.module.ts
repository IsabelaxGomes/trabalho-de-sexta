

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { DiretorsComponent } from './components/diretors/diretors.component';
import { GerentesComponent } from './components/gerentes/gerentes.component';
import { FuncionarioADMsComponent } from './components/funcionario-adms/funcionario-adms.component';

const routes: Routes = [
  {
    path: 'funcionarios',
    component: FuncionariosComponent,
  },
  {
    path: 'diretors',
    component: DiretorsComponent,
  },
  {
    path: 'gerentes',
    component: GerentesComponent,
  },
  {
    path: 'funcionario-adms',
    component: FuncionarioADMsComponent,
  },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
