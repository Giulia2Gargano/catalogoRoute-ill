import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContaComponent } from './conta/conta.component';
import { MainComponent } from './main/main.component';
import { CercaComponent } from './cerca/cerca.component';
import { FormPanelComponent } from './form-panel/form-panel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContaComponent,
    MainComponent,
    CercaComponent,
    FormPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
