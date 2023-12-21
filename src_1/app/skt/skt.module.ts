import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SktRoutingModule } from './skt-routing.module';
import { TopComponent } from './top/top.component';
import { MidComponent } from './mid/mid.component';
import { BotComponent } from './bot/bot.component';


@NgModule({
  declarations: [
    TopComponent,
    MidComponent,
    BotComponent
  ],
  imports: [
    CommonModule,
    SktRoutingModule
  ]
})
export class SktModule { }
