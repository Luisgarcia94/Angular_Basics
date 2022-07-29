import { Component} from '@angular/core';
import { Personaje } from '../interfaces/saintseiyainterface';
import { SaintSeiyaService } from '../services/saintseiya.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  nuevo:Personaje = {
    nombre:"",
    poder: 0
  };

  constructor(private ssService:SaintSeiyaService){

  }
  };
