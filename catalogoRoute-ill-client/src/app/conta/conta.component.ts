import { Component, OnInit } from '@angular/core';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  constructor(public med:MediatorService) { }

  ngOnInit(): void {
  }

}
