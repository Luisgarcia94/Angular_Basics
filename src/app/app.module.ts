import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';
import { SaintseiyaModule } from './saintseiya/saintseiya.module';
import { SaintSeiyaService } from './saintseiya/services/saintseiya.services';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    SaintseiyaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
