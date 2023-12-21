import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DawRoutingModule } from './daw-routing.module';
import { DiwComponent } from './diw/diw.component';
import { DwesComponent } from './dwes/dwes.component';
import { DwecComponent } from './dwec/dwec.component';
import { DespliegueComponent } from './despliegue/despliegue.component';


@NgModule({
  declarations: [
    DiwComponent,
    DwesComponent,
    DwecComponent,
    DespliegueComponent
  ],
  imports: [
    CommonModule,
    DawRoutingModule
  ]
})
export class DawModule { }
