import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregrarComponent } from './agregrar/agregrar.component';
import { SaintSeiyaService } from './services/saintseiya.services';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregrarComponent
  ],

  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    SaintSeiyaService
  ]
})
export class SaintseiyaModule { }
