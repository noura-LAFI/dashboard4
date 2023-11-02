import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  isLoged :any =localStorage.getItem('isLogged')


  constructor(  private router :Router) { }

  ngOnInit(): void {
  }
  
}
