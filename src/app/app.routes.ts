import { Routes } from '@angular/router';
import { EmpleadoComponent } from './empleado/components/empleado.component';
import { FormComponent } from './empleado/components/form/form.component';
import { ActualizarComponent } from './empleado/components/actualizar/actualizar.component';

export const routes: Routes = [
  { path: '', redirectTo: '/empleados', pathMatch: 'full' },
  { path: 'empleados', component: EmpleadoComponent },
  { path: 'registrar', component: FormComponent }, 
  { path: 'actualizar/:cedula', component: ActualizarComponent },// Ruta específica primero
];
