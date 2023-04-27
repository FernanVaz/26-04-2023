import { Injectable } from '@angular/core';
import { alumno } from './_Modules/alumno';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor() {}
  mialumnos:alumno[]=[
    {id:1, dni:1234123, nombre:"Manuel", horas:120},
    {id:2, dni:9876542, nombre:"Alberto", horas:120},
    {id:3, dni:3246472, nombre:"Isra", horas:120},
    {id:4, dni:4455656, nombre:"Ruben", horas:120},
  ]

  getalumnos():Observable<alumno[]>{
    return of (this.mialumnos)
  }

  anadiralumno(alumno:alumno){
    this.mialumnos.push(alumno)
  }

  buscarAlumno(id:number):Observable<alumno>{
    let dato = this.mialumnos.find((mialumnos) => mialumnos.id == id);
    if(dato!=undefined){
      return of(dato)
    }
    else {
      return of({id:0, dni:0, nombre:"", horas:0})
    }
  }
  eliminarAlumno  (id:number){
    let dato = this.mialumnos.findIndex((mialumnos) => mialumnos.id=== id)
    if(dato!==-1){
    this.mialumnos.splice(dato, 1)
    }
  }
  modificarcurso(id:number, nuevoAlumno:alumno){

     let dato = this.mialumnos.findIndex((mialumnos) => mialumnos.id==id)
    if(dato!=-1){
    this.mialumnos[dato]=nuevoAlumno

    }
  }
}
