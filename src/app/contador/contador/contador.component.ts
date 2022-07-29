import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template:` <h1>{{title}}</h1>
    <h3>La base es : <strong>{{base}}</strong></h3>
    <button (click)="sumar();"> + {{base}} </button>
    <span>{{numero}}</span>
    <button (click)="base = base*-1; sumar(); base= base*-1;"> - {{base}} </button> `
})
export class ContadorComponent{
    title:string = 'Contador App';
    numero:number = 100;
    base:number = 5;
    sumar = ():number=> this.numero +=this.base;

}