import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotComponent } from './bot/bot.component';
import { MidComponent } from './mid/mid.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  {path: "top", component: TopComponent},
  {path: "mid", component: MidComponent},
  {path: "bot", component: BotComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FnaticRoutingModule { }
