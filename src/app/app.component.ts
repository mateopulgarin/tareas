import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Empleado } from './models/empleados';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {

  @Output () 

  title:string = 'Gestion de tareas';
  msg:string = '';
  forms?: FormGroup;
  empleados: Empleado[] = [];

  modelo:any = {};
  modelo2:any = {};
  hideActualizar:boolean = true;

  constructor(private fb:FormBuilder,  private messageService: MessageService, private _http: HttpClient ){

  }

  closeAlert(): void {
    this.msg = '';
  }


  ngOnInit(): void {
    this.inicializarFormulario();
   

  }

  inicializarFormulario(){
    this.forms = this.fb.group(
      {
        nombre: [null, [Validators.required]],
        posicion: [null, [Validators.required]],
        email: [null, [Validators.required]],
      }
    )
  }

  agregarEmpleado(): void {
    if(this.forms?.valid){
      let parametros = new  Empleado()
      parametros.nombre = this.forms?.controls['nombre'].value;
      parametros.posicion = this.forms?.controls['posicion'].value;
      parametros.email = this.forms?.controls['email'].value;
      this.empleados.push(parametros);
      this.messageService.add({severity:'success', summary:'Bien', detail:'Dato creado correctamente'});
    } else {
      this.messageService.add({severity:'error', summary:'Error', detail:'El formulario es invalido'});

    }

   
  }

  eliminarEmpleado(i:any): void {
    let respuesta = confirm('¿Estas seguro de eliminar este dato?');
    if(respuesta) {
      this.empleados.splice(i, 1);
    }
    this.msg = 'Campo Eliminado';
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
    this.msg = 'Campo Editado';
  }

  actualizarEmpleado(): void {
    let Empleado = this.myValue;
    for(let j = 0; j < this.empleados.length; j++){
      if(Empleado == j) {
        this.empleados[Empleado] = this.modelo2; 
        this.msg = 'Campo Actualizado';
        this.modelo2 = {};
      }
    }
  }
}