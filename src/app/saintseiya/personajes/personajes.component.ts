import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/saintseiyainterface';
import { SaintSeiyaService } from '../services/saintseiya.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {

// @Input() personajes:Personaje[] =[];

get personajes(){
  return this.ssSeiya.personajes;
}
constructor(private ssSeiya:SaintSeiyaService){}
}
