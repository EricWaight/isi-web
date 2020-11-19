import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { IsiCreateComponent } from './components/isi-create/isi-create.component'
import { IsiEditComponent } from './components/isi-edit/isi-edit.component'
import { IsiListComponent } from './components/isi-list/isi-list.component'
import { ApiService } from './services/api.service'

@NgModule({
  declarations: [
    IsiCreateComponent,
    IsiEditComponent,
    IsiListComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
