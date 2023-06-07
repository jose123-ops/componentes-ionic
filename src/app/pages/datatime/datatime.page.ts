import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatime',
  templateUrl: './datatime.page.html',
  styleUrls: ['./datatime.page.scss'],
})
export class DatatimePage implements OnInit {

  FechaNaci: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
