import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UolRoutingModule } from './uol-routing.module';
import { BotComponent } from './bot/bot.component';
import { TopComponent } from './top/top.component';
import { MidComponent } from './mid/mid.component';


@NgModule({
  declarations: [
    BotComponent,
    TopComponent,
    MidComponent
  ],
  imports: [
    CommonModule,
    UolRoutingModule
  ]
})
export class UolModule { }
