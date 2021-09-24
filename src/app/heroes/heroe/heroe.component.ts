import { Component } from "@angular/core";


@Component({
selector:'app-heroe',
templateUrl:'heroes.component.html'

})
export class HeroeComponent{

    nombre:string="IronMan";
    edad:number=45;

    obtenerNombre():string{
        return this.nombre+" - "+this.edad;
    }

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void{
        this.nombre="SpiderMan";
    }

    cambiarEdad():void{
        this.edad=30;
    }

}