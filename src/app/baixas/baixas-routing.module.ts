import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaixasPage } from './baixas.page';

const routes: Routes = [
  {
    path: '',
    component: BaixasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaixasPageRoutingModule {}
