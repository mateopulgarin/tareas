import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleados';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

   @Input()  set empleadoLista(data:Empleado){
      if(data){
        this.empleados.push(data) 
      }
      
   }

  empleados: Empleado[] = [];

  modelo:any = {};
  modelo2:any = {};
  hideActualizar:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  eliminarEmpleado(i:any): void {
    let respuesta = confirm('¿Estas seguro de eliminar este dato?');
    if(respuesta) {
      this.empleados.splice(i, 1);
    }
  }

  onClickEmpleado(empleado: any): void {
    this.eliminarEmpleado(empleado);
  }
 
  myValue:any;
  editarEmpleado(empleado:Empleado) {
    this.hideActualizar = false;
    this.modelo2.nombre = empleado.nombre
    this.modelo2.posicion = empleado.posicion;
    this.modelo2.email = empleado.email;
  }

  actualizarEmpleado(): void {
    let i = this.myValue;
    for(let j = 0; j < this.empleados.length; j++){
      if(i == j) {
        this.empleados[i] = this.modelo2; 
        this.modelo2 = {};
      }
    }
  }

  sumar(n1:number, n2:number){
     return n1 + n2 
  }
}


