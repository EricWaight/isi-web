import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { IsiCreateComponent } from './components/isi-create/isi-create.component'
import { IsiEditComponent } from './components/isi-edit/isi-edit.component'
import { IsiListComponent } from './components/isi-list/isi-list.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-index' },
  { path: 'create-index', component: IsiCreateComponent },
  { path: 'edit-index/:id', component: IsiEditComponent },
  { path: 'index-list', component: IsiListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
