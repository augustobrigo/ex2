import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FnaticComponent } from './fnatic/fnatic.component';
import { KoiComponent } from './koi/koi.component';
import { SktComponent } from './skt/skt.component';
import { UolComponent } from './uol/uol.component';

const routes: Routes = [
  {
    path: 'fnatic',
    component: FnaticComponent,
    loadChildren: () => import('./fnatic/fnatic.module').then(m => m.FnaticModule)
  },
  {
    path: 'skt',
    component: SktComponent,
    loadChildren: () => import('./skt/skt.module').then(m => m.SktModule)
  },
  {
    path: 'uol',
    component: UolComponent,
    loadChildren: () => import('./uol/uol.module').then(m => m.UolModule)
  },
  {
    path: 'koi',
    component: KoiComponent,
    loadChildren: () => import('./koi/koi.module').then(m => m.KoiModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
