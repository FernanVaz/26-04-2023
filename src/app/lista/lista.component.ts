import { Component } from '@angular/core';
import { alumno } from '../_Modules/alumno';
import { AlumnoService } from '../alumno.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  alumno : alumno = {id:0, dni:0, nombre:"", horas:0}
  alumnos:alumno[]=[]
  ids : number = 0


  constructor(private servicioalumnos: AlumnoService){}

  ngOnInit(): void {
    this.servicioalumnos.getalumnos().subscribe(data => {
    this.alumnos=data
  })
}
}
