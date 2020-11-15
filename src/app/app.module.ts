import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { IsiCreateComponent } from './components/isi-create/isi-create.component'
import { IsiEditComponent } from './components/isi-edit/isi-edit.component'
import { IsiListComponent } from './components/isi-list/isi-list.component'

@NgModule({
  declarations: [
    AppComponent,
    IsiCreateComponent,
    IsiEditComponent,
    IsiListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
