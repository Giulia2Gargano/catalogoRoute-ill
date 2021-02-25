import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediatorService } from '../mediator.service';
import { Prodotto } from '../prodotto';

@Component({
  selector: 'app-cerca',
  templateUrl: './cerca.component.html',
  styleUrls: ['./cerca.component.css']
})
export class CercaComponent implements OnInit {

  criterioRicerca: string;
  filtroProdotti: Prodotto[] = [];
  //showProdotti: boolean = true;
  showFiltroProdotti: boolean = false;

  constructor(public med: MediatorService, private router: Router) { }

  ngOnInit(): void {
  }
  mainPage() {
    this.router.navigateByUrl("/main-page");
  }
  cerca() {
    //this.showProdotti = false;
    this.showFiltroProdotti = true;
    this.filtroProdotti = this.med.prodotti;
    this.filtroProdotti = this.filtroProdotti.filter(r => r.codice.includes(this.criterioRicerca) ||
      r.descrizione.includes(this.criterioRicerca));
  }
}
