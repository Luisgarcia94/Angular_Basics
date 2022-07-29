import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/saintseiyainterface';
import { SaintSeiyaService } from '../services/saintseiya.services';
@Component({
  selector: 'app-agregrar',
  templateUrl: './agregrar.component.html',
  styleUrls: ['./agregrar.component.css']
})
export class AgregrarComponent  {

  @Input() nuevo:Personaje = {
    nombre:"",
    poder:0
  }

  //@Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();

constructor(private sSeiyaService:SaintSeiyaService){}

agregar=():any=>{
  if(this.nuevo.nombre.trim().length == 0 || this.nuevo.poder == 0) return;
  //this.onNuevoPersonaje.emit(this.nuevo);
  console.log(this.nuevo);
  this.sSeiyaService.agregarPersonaje(this.nuevo);
  this.nuevo = {
    nombre:"",
    poder: 0
  }
}

}