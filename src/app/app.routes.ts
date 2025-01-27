import { Routes } from '@angular/router';
import { EmpleadoComponent } from './empleado/components/empleado.component';
import { FormComponent } from './empleado/components/form/form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/empleados', pathMatch: 'full' },
  { path: 'empleados', component: EmpleadoComponent },
  { path: 'registrar', component: FormComponent }, // Ruta específica primero
];
