import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SuccesfullComponent } from './succesfull.component';
import { SucessRoutingModule } from './succesfull-routing.module';

@NgModule({
  imports: [
    SucessRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ SuccesfullComponent ]
})
export class SucessModule { }
