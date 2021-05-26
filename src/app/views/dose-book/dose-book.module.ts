import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DoseBookComponent } from './dose-book.component';
import { DoseBookRoutingModule } from './dose-book-routing.module';

@NgModule({
  imports: [
    DoseBookRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ DoseBookComponent ]
})
export class DoseBookModule { }
