import { Injectable } from "@angular/core";
import { Inventario } from "src/app/inventario/interface/interface";

@Injectable()
export class InventarioServece{
  public inventario:Inventario[]=[
    {
      nombre:'cuaderno',
      cantidad:2,
      img:'./assets/notebook-png.webp'
    },
    {
      nombre:'grapadora',
      cantidad:3,
      img:'./assets/grapadora.png'
    }
  ]
  get inv(): Inventario[] {
    return [...this.inventario];
}

}

