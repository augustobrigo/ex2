import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FnaticComponent } from './fnatic/fnatic.component';
import { KoiComponent } from './koi/koi.component';
import { SktComponent } from './skt/skt.component';
import { UolComponent } from './uol/uol.component';

@NgModule({
  declarations: [
    AppComponent,
    FnaticComponent,
    KoiComponent,
    SktComponent,
    UolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
