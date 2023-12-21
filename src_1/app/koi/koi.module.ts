import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KoiRoutingModule } from './koi-routing.module';
import { MidComponent } from './mid/mid.component';
import { BotComponent } from './bot/bot.component';
import { TopComponent } from './top/top.component';


@NgModule({
  declarations: [
    MidComponent,
    BotComponent,
    TopComponent
  ],
  imports: [
    CommonModule,
    KoiRoutingModule
  ]
})
export class KoiModule { }
