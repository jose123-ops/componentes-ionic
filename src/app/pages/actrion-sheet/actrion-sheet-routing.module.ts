import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActrionSheetPage } from './actrion-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: ActrionSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActrionSheetPageRoutingModule {}
