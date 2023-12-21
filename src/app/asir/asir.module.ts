import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsirRoutingModule } from './asir-routing.module';
import { SorComponent } from './sor/sor.component';
import { BdComponent } from './bd/bd.component';
import { LmComponent } from './lm/lm.component';
import { FhComponent } from './fh/fh.component';


@NgModule({
  declarations: [
    SorComponent,
    BdComponent,
    LmComponent,
    FhComponent
  ],
  imports: [
    CommonModule,
    AsirRoutingModule
  ]
})
export class AsirModule { }
