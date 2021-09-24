import { NgModule } from "@angular/core";
import { contadorComponent } from "./contador.componente";


@NgModule({
declarations:[
    contadorComponent
],
exports:[
    contadorComponent
]
})

export class ContadorModule{

    }