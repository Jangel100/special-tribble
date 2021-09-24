import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template:`
    <h1>{{title}}</h1>

<button (click)="acumular(+1)">+1</button>

<span>{{Numero}}</span>

<button (click)="acumular(-1)" >-1</button>
    `
})
export class contadorComponent{
    title = 'Contador App';
    Numero:number=10;
  
    acumular(valor:number){
    this.Numero += valor;
  }
}