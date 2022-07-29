import { Component } from "@angular/core";

@Component({
    selector:'heroe-component',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {
    nombre:string = 'Iron Man';
    edad:number = 45;
    mostrarInfo = ():string =>{
        return `${this.nombre} ${this.edad} `;
    }
    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    cambiarNombre = () =>{
        this.nombre = 'WonderWoman';
    }

    cambiarEdad = () =>{
        this.edad = 33;
    }
}