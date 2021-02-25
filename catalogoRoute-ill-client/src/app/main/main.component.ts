import { Component, OnInit } from '@angular/core';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public med:MediatorService) { }

  ngOnInit(): void {
  }

}
