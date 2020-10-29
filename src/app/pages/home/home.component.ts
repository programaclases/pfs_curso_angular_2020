import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public expression: boolean = true;
  public title = 'Curso de Angular';
  public description = 'Introducción al desarrollo web con Angular';

  constructor() {
  }

  ngOnInit(): void {
  }

 
}
