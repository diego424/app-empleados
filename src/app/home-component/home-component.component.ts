import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  titulo = 'Listado de Empleados';

  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) {
    //this.empleados = this.empleadosService.empleados
  }

  ngOnInit(): void {
    //this.empleados = this.empleadosService.empleados;

    this.empleadosService.obtenerEmpleados().subscribe(misEmpleados=>{
      console.log(misEmpleados);

      this.empleados = Object.values(misEmpleados);

      this.empleadosService.setEmpleados(this.empleados)
    });
  }

  empleados:Empleado[]=[
    //new Empleado("Diego", "Oviedo", "Programador", 3000),
    //new Empleado("Angela", "Rodriguez", "Diseñadora", 2500),
    //new Empleado("Ricardo", "Gonzalez", "Investigador", 3500),
    //new Empleado("Andrés", "Perez", "Análista", 4000),
  ];

  agregarEmpleado(){

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre + " " + miEmpleado.apellido);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    //this.empleados.push(miEmpleado);

  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

}
