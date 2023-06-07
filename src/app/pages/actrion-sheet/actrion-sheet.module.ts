import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActrionSheetPageRoutingModule } from './actrion-sheet-routing.module';

import { ActrionSheetPage } from './actrion-sheet.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActrionSheetPageRoutingModule,
    ComponentsModule

  ],
  declarations: [ActrionSheetPage]
})
export class ActrionSheetPageModule {}
