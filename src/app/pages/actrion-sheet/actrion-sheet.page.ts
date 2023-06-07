import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-actrion-sheet',
  templateUrl: './actrion-sheet.page.html',
  styleUrls: ['./actrion-sheet.page.scss'],
})
export class ActrionSheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Accion',
     backdropDismiss: false,
      buttons: [
        {
          text: 'Borrar',
          role: 'destructive',
          icon: 'trash-outline',
          cssClass:'rojo',
          data: {
            action: 'delete',
          },
        },


        {
          text: 'Enviar',
          icon:'share-social-outline',
          data: {
            action: 'share',
          },
        },

        {
          text: 'Cancelar',
          role: 'cancel',
          icon:'close-outline',
          data: {
            action: 'cancel',
          },
        },

        // {
        //   text: 'Favorito',
        //   role: 'cancel',
        //   icon:'star-outline',
        //   data: {
        //     action: 'Favorite',
        //   },

        // },




      ],
    });

    await actionSheet.present();
  }


}
