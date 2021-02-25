import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContaComponent } from './conta/conta.component';
import { MainComponent } from './main/main.component';
import { CercaComponent } from './cerca/cerca.component';

@NgModule({
  declarations: [
    AppComponent,
    ContaComponent,
    MainComponent,
    CercaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
