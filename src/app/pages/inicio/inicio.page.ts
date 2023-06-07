import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componentes[] = [

    {
      icon: 'alert-circle-outline',
      nombre: 'Alert',
      redirectTto:'/alert'
    },

    {
      icon: 'document-outline',
      nombre: 'action-sheet',
      redirectTto:'/actrion-sheet'
    },


    {
      icon: 'person-circle-outline',
      nombre: 'Avatar',
      redirectTto:'/avatar'
    },


    {
      icon: 'radio-button-on-outline',
      nombre: 'Botones',
      redirectTto:'/botones'
    },

    {
      icon: 'card-outline',
      nombre: 'Card',
      redirectTto:'/card'
    },

    {
      icon: 'checkbox-outline',
      nombre: 'Checkbox',
      redirectTto:'/check'
    },

    {
      icon: 'calendar-outline',
      nombre: 'Datatime',
      redirectTto:'/datatime'
    },

    {
      icon: 'logo-foursquare',
      nombre: 'Fab',
      redirectTto:'/fab'
    },

    {
      icon: 'grid-outline',
      nombre: 'Grid',
      redirectTto:'/grid'
    },

    {
      icon: 'swap-vertical-outline',
      nombre: 'Scroll',
      redirectTto:'/infiniti-scroll'
    },



  ];

  constructor() { }

  ngOnInit() {
  }
}

interface Componentes {
  icon: string;
  nombre: string;
  redirectTto : string
}



