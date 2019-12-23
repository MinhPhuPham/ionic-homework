import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailFilmsPage } from './detail-films.page';

const routes: Routes = [
  {
    path: '',
    component: DetailFilmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailFilmsPageRoutingModule {}
