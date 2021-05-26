import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoseBookComponent } from './dose-book.component';

const routes: Routes = [
  {
    path: '',
    component: DoseBookComponent,
    data: {
      title: 'DoseBookComponent'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoseBookRoutingModule {}
