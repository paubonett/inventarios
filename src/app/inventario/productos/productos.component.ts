import { Component } from '@angular/core';
import { Inventario } from '../interface/interface';
import { InventarioServece } from '../serveces/inventario.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})


export class ProductosComponent  {

  productos: Array<Inventario> = []

  constructor(public InventarioServece:InventarioServece) {
    this.productos = this.InventarioServece.inv
  }



}
