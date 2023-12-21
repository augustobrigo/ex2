import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FnaticRoutingModule } from './fnatic-routing.module';
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
    FnaticRoutingModule
  ]
})
export class FnaticModule { }
