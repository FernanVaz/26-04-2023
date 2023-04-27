import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from '../alumno.service';
import { alumno } from '../_Modules/alumno';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  alumnoFormulario:FormGroup = new FormGroup ({
    id : new FormControl(0),
    dni : new FormControl(0),
    nombre : new FormControl (''),
    horas : new FormControl(0)
  })
  alumnonuevo: alumno;



   constructor(private servicioalumnos: AlumnoService, private activateroute: ActivatedRoute,private rutes : Router){

   }
   ngOnInit(): void {
    this.activateroute.params.subscribe(params=>{
      this.servicioalumnos.buscarAlumno(params["id"]).subscribe(alumno => {
        this.alumnonuevo=alumno;

        this.alumnoFormulario= new FormGroup ({

          id : new FormControl(this.alumnonuevo.id),
          dni : new FormControl(this.alumnonuevo.dni),
          nombre : new FormControl (this.alumnonuevo.nombre),
          horas : new FormControl(this.alumnonuevo.horas)
        });


      })


    })


}
   modificar(){
    const alumno2 :alumno={
      id : this.alumnoFormulario.value.id,
      dni : this.alumnoFormulario.value.dni,
      nombre : this.alumnoFormulario.value.nombre,
      horas: this.alumnoFormulario.value.horas,
    };

    this.servicioalumnos.modificarcurso(alumno2.id, alumno2)
    this.rutes.navigate([''])
    }
  alta(){

    const alumno1:alumno={
      id : this.alumnoFormulario.value.id,
      dni : this.alumnoFormulario.value.dni,
      nombre : this.alumnoFormulario.value.nombre,
      horas: this.alumnoFormulario.value.horas,
    };
    this.servicioalumnos.anadiralumno(alumno1)
    this.rutes.navigate([''])
  }
}
