import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Empleado } from 'src/app/models/empleados';


@Component({
  selector: 'crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {


  forms?: FormGroup;
  empleados: Empleado
  title:string = 'Aplicación de tareas';
  objetoEmpleado:Empleado

  constructor(private fb:FormBuilder,  private messageService: MessageService) { 

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

      this.objetoEmpleado= parametros

      this.messageService.add({severity:'success', summary:'Bien', detail:'Dato creado correctamente'});
    } else {
      this.messageService.add({severity:'error', summary:'Error', detail:'El formulario es invalido'});

    }
  }
}
