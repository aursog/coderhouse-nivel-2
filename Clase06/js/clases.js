/**
 * Created by aurso on 12/14/16.
 */

var Persona = function(nombres, apellidos) {
    this.nombres = nombres;
    this.apellidos = apellidos
};

Persona.prototype.getNombreCompleto = function() {
    return this.nombres + " " + this.apellidos;
};

function Alumno(nota_final, nombres, apellidos, edad) {
    this.nota_final = nota_final;
    this.edad = edad;

    Persona.call(this, nombres, apellidos);
};

Alumno.prototype = Object.create(Persona.prototype);
Alumno.prototype.getNotaFinal = function() {
    return this.nota_final;
}

function Profesor(nombres, apellidos, asignatura) {
    this.asignatura = asignatura;

    Persona.call(this, nombres, apellidos);
}

Profesor.prototype = Object.create(Persona.prototype);

function Curso(profesor) {
    this.profesorJefe = profesor;
    this.alumnos = [];
}

Curso.prototype.agregarAlumnos = function(alumno) {
    this.alumnos.push(alumno);
};

Curso.prototype.getRepitentesAprobados = function(repitente) {
    var arrAlumnos = this.alumnos.filter(function(alumno) {
        if (repitente) {
            return alumno.getNotaFinal() < 4;
        } else {
            return alumno.getNotaFinal() >= 4;
        }
    });

    var response = [];
    arrAlumnos.forEach(function(alumno, index) {
        response.push(alumno.getNombreCompleto());
    });

    return response;
};

Curso.prototype.getDetalleCurso = function() {
    console.log("El profesor jefe es: " + this.profesorJefe.getNombreCompleto());
    console.log("Los alumnos repitentes son: " + this.getRepitentesAprobados(true));
    console.log("Los alumnos aprobados son: " + this.getRepitentesAprobados(false));
}