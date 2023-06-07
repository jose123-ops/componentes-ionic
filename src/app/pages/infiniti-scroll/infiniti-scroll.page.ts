import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infiniti-scroll',
  templateUrl: './infiniti-scroll.page.html',
  styleUrls: ['./infiniti-scroll.page.scss'],
})
export class InfinitiScrollPage implements OnInit {

    data:any[]= Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event: any){
    console.log('cargando siguiente ......');

setTimeout(() => {

if(this.data.length>50) {
 event.target.complete();
 return;
}

  const nuevoArr = Array(20);
  this.data.push(...nuevoArr);
  event.target.complete();
}, 1000);

  }

}
