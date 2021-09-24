import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes:string[]=['Spiderman', 'IronMan', 'Hulk', 'Thor']
  heroe:string = "";
 

  borrar():void{   
    this.heroe = this.heroes.shift() || '';
  }

}
