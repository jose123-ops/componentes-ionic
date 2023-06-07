import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  actionSheetCtrl: any;

  titulo!: string;

  ngOnInit() {
  }

  public alertButtons = [
    {

    text: 'Borrar',
    role: 'destructive',
    icon: 'trash-outline',
    cssClass:'rojo',
    data: {
      action: 'Cancelar',
    },
  },

  {
    text: 'ok',
    role: 'cancel',
    icon:'close-outline',
    data: {
    action: 'cancelar',
    },
  },
  ];

  constructor() { }




  public alertButton = [
{


  text: 'Borrar',
  role: 'destructive',
  icon: 'trash-outline',
  cssClass:'rojo',
  data: {
    action: 'Cancelar',
  },
},

{
  text: 'ok',
  handler:(data: any)=>{
    console.log('confirm ok',data)
    this.titulo = data.txtnombre;
  }

},
 ]
  public alertInputs = [
    {
      name: 'txtnombre',
      placeholder: ' escriba su Nombre',

    },


  ];
}








