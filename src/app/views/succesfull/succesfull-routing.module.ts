import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccesfullComponent } from './succesfull.component';

const routes: Routes = [
  {
    path: '',
    component: SuccesfullComponent,
    data: {
      title: 'SuccessComponent'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucessRoutingModule {}
