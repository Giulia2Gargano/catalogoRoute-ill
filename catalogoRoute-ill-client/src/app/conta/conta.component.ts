import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  constructor(public med:MediatorService, private router: Router) { }

  ngOnInit(): void {
  }

  mainPage(){
    this.router.navigateByUrl("/main-page");
  }
}
