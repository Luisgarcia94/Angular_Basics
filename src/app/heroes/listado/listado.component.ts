import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes:string[] = ['Iron Man','Wonder Woman', 'Spider Man'];
  heroeBorrado:string="";
  borrarHeroe = ():void=>{
    this.heroeBorrado = this.heroes.pop()||"";
  }
}
