import {​​​ Component, OnInit }​​​ from '@angular/core';
import {​​​Producto}​​​ from "./productos";

@Component({​​​
  selector: 'productos-c',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']

}​​​)

export class ProductosComponent implements OnInit {​​​
  tituloPagina: string = 'Lista de Productos';
  mostrarImagenes: boolean = false;
  private _filtrarProductos: string = '';
  get filtrarProductos(): string{​​​
    return this._filtrarProductos;
  }​​​

  set filtrarProductos(valor: string){​​​
    this._filtrarProductos = valor;
    console.log(valor);
    this.productosFiltrados = this.filtroProductos(valor);
    console.log(this.productosFiltrados);

  }​​​

  productosFiltrados: Producto[] = [];

  productos: Producto[] = [

    {​​​
      id: 1,
      nombre: "Audifonos bluetooth",
      codigo: "BL-50",
      disponibilidad: false,
      precio: 999.99,
      rating: 4.2,
      imgenURL: '../assets/caja.png',
    }​​​,
    {​​​
      id: 2,
      nombre: "Macbook Pro",
      codigo: "MAC-50",
      disponibilidad: false,
      precio: 12000,
      rating: 3.5,
      imgenURL: '../assets/caja.png',
    }​​​,
    {​​​
      id: 3,
      nombre: "IPhone XS",
      codigo: "iPHONE-50",
      disponibilidad: true,
      precio: 4000,
      rating: 4.5,
      imgenURL: '../assets/caja.png',
    }​​​,
    {​​​
      id: 4,
      nombre: "MacBook Air 13 pulgadas",
      codigo: "MAC-13",
      disponibilidad: true,
      precio: 12000,
      rating: 1.5,
      imgenURL: '../assets/caja.png',
    }​​​,
    {​​​
      id: 5,
      nombre: "Laptop HP",
      codigo: "HP-200",
      disponibilidad: false,
      precio: 8500.50,
      rating: 3,
      imgenURL: '../assets/caja.png',
    }​​​,
    {​​​
      id: 6,
      nombre: "Samsung Galaxy s10",
      codigo: "SS-10",
      disponibilidad: true,
      precio: 12000,
      rating: 4.2,
      imgenURL: '../assets/caja.png',
    }​​​,
    {​​​
      id: 7,
      nombre: "Headsets HyperX",
      codigo: "HYPERX-32",
      disponibilidad: true,
      precio: 999.99,
      rating: 4,
      imgenURL: '../assets/caja.png',
    }​​​

  ]

  constructor() {​​​ }​​​

  filtroProductos(filtrarPor: string): Producto[]{​​​
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.productos.filter((producto: Producto) =>
    producto.nombre.toLocaleLowerCase().includes(filtrarPor));

  }​​​

  toggleImagenes(): void{​​​
    this.mostrarImagenes = !this.mostrarImagenes;
  }​​​

  ngOnInit(): void {​​
    this.filtrarProductos = '';
  }​​​

}​​​
