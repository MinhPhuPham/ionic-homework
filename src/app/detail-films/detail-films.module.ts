import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailFilmsPageRoutingModule } from './detail-films-routing.module';

import { DetailFilmsPage } from './detail-films.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailFilmsPageRoutingModule
  ],
  declarations: [DetailFilmsPage]
})
export class DetailFilmsPageModule {}
