import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CercaComponent } from './cerca/cerca.component';
import { ContaComponent } from './conta/conta.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'main-page', component: MainComponent },
  { path: 'search-page', component: CercaComponent },
  { path: 'count-page', component: ContaComponent },
  { path: '', redirectTo: '/main-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
