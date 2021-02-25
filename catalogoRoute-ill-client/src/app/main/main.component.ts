import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public med: MediatorService, private router: Router) { }

  ngOnInit(): void {
  }

  vaiAPaginaCerca(s: string) {
    this.router.navigateByUrl("/search-page");
    console.log(s);
  }

  vaiAPaginaConta(s: string) {
    this.router.navigateByUrl("/count-page");
    console.log(s);
  }




}
