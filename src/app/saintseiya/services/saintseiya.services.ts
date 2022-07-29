import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/saintseiyainterface";

@Injectable()
export class SaintSeiyaService{

    private _personajes:Personaje[] = [
        {
        nombre:"Muu",
        poder:4500
        },
        {
        nombre:"Aioria",
        poder:4499
        }
    ];

    get personajes():Personaje[]{
        return [...this._personajes];
    }

    agregarPersonaje=(personaje:Personaje):void=>{
        this._personajes.push(personaje);
    }
    
    constructor(){
    }
    

}