import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {


  private url: string = "http://localhost:8080/api/v1/empleados";

  constructor(private http: HttpClient) { }

  findAll(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.url); 
    
  }

  save(empleado: Empleado): Observable<Object>{
    return this.http.post(this.url, empleado);
  }

  findByCedula(cedula: number): Observable<Empleado> {
    const url = `${this.url}/${cedula}`; // Concatenar la cédula al endpoint
    return this.http.get<Empleado>(url);
  }
  
  update(cedula: number, empleado: Empleado): Observable<Object> {
    const updateUrl = `${this.url}/${cedula}`; 
    return this.http.put(updateUrl, empleado); 
  }

}
