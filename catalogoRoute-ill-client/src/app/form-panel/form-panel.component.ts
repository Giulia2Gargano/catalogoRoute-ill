import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MediatorService } from '../mediator.service';
import { Prodotto } from '../prodotto';

@Component({
  selector: 'app-form-panel',
  templateUrl: './form-panel.component.html',
  styleUrls: ['./form-panel.component.css']
})
export class FormPanelComponent implements OnInit {
  @Input() codiceIn: string;
  @Input() descrizioneIn: string;
  @Input() prezzoIn: number;


  @Output() contaOut = new EventEmitter<string>();
  @Output() cercaOut = new EventEmitter<string>();

  prodotto = new Prodotto();
  constructor(public med: MediatorService, private router: Router) { }

  ngOnInit(): void {
  }

  aggiungi() {
    this.med.prodotti.push(this.prodotto);
    this.prodotto = new Prodotto();
  }

  conta() {
    this.contaOut.emit('Evento Conta');
  }

  cerca() {
    this.cercaOut.emit('Evento Cerca');
  }

}
