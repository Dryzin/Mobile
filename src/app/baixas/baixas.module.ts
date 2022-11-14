import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaixasPageRoutingModule } from './baixas-routing.module';

import { BaixasPage } from './baixas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaixasPageRoutingModule
  ],
  declarations: [BaixasPage]
})
export class BaixasPageModule {}
