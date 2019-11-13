import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MeubleComponent } from './meuble/meuble.component';
import { MeublesListComponent } from './meubles-list/meubles-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MeubleComponent,
    MeublesListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
