import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../../services/empleado.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizar',
  imports: [FormsModule],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent implements OnInit {

  empleado: Empleado = {
    cedula: 0,
    nombre: '',
    apellido: '',
    email: ''
  };

  constructor(
    private route: ActivatedRoute,
    private empleadoService: EmpleadoService,
    private router: Router
  ) {}


  ngOnInit(): void {
    const cedula = Number(this.route.snapshot.paramMap.get('cedula'));
    this.empleadoService.findByCedula(cedula).subscribe({
      next: (data) => {
        this.empleado = data;
      },
      error: (err) => {
        console.error('Error al cargar empleado:', err);
        alert('No se pudo cargar la información del empleado.');
      }
    });
  }

  onSubmit(): void {
    const cedulaValida = this.empleado.cedula ?? 1;
    this.empleadoService.update(cedulaValida, this.empleado).subscribe({
      next: () => {
        alert('Empleado actualizado con éxito.');
        this.router.navigate(['/empleados']);
      },
      error: (err) => {
        console.error('Error al actualizar empleado:', err);
        alert('Hubo un error al actualizar el empleado.');
      }
    });

}

onCancel(): void {
  this.router.navigate(['/empleados']); // Redirige a la lista de empleados si se cancela
}

}