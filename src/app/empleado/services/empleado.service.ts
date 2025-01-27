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


}
