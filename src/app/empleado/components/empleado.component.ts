import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../services/empleado.service';
import { Empleado } from '../models/empleado';

@Component({
  selector: 'app-empleado',
  imports: [],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent implements OnInit {

  empleados: Empleado[] = [];

  constructor(private service: EmpleadoService){

  }
  ngOnInit(): void {
    this.service.findAll().subscribe(empleados => this.empleados = empleados);
  }

}
