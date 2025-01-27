import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar esto correctamente
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule], // FormsModule debe estar aquí
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'] // Cambia styleUrl a styleUrls (es un array)
})
export class FormComponent {
  
  empleado: Empleado = new Empleado();

  constructor(private servicio:EmpleadoService, private router: Router){}

  save() {
    const empleadoToSave = { ...this.empleado };
    delete empleadoToSave.id; // Elimina el campo 'id'
  
    this.servicio.save(empleadoToSave).subscribe({
      next: (dato) => {
        console.log(dato);
        this.listaEmpleado();
      },
      error: (error) => console.error('Error al guardar empleado:', error),
      complete: () => console.log('Operación completada'),
    });
  }
  
  
  listaEmpleado() {
    this.router.navigate(["/empleados"])
  }

  

  onSubmit(): void {
    this.save();
  }
}
