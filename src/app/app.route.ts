import { Routes } from '@angular/router'

import { ListarComponent } from './listar/listar.component'
import { CadastrarComponent } from './cadastrar/cadastrar.component'

export const ROUTES : Routes = [
  {path : '', component: ListarComponent},
  {path : 'listar', component: ListarComponent},
  {path : 'cadastrar', component: CadastrarComponent}
]
