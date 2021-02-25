import { Component, OnInit } from '@angular/core';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-cerca',
  templateUrl: './cerca.component.html',
  styleUrls: ['./cerca.component.css']
})
export class CercaComponent implements OnInit {

  constructor(public med:MediatorService) { }

  ngOnInit(): void {
  }

}
