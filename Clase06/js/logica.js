/**
 * Created by aurso on 12/14/16.
 */

var profeJuan = new Profesor("Juan Daniel", "Diaz González", "Matemática");
var octavoA = new Curso(profeJuan);

var alumno1 = new Alumno(5, "Pedro Pablo", "Perez Pereira", 16);
var alumno2 = new Alumno(6, "Gabriel Ignacio", "Urso Diaz", 15);
var alumno3 = new Alumno(3, "Carol Andrea", "Diaz González", 16);
var alumno4 = new Alumno(2, "Alejandro Abel", "Gonzalez Cueto", 17);
var alumno5 = new Alumno(4, "Antonio Andres", "Gonzalez Antiman", 15);

octavoA.agregarAlumnos(alumno1);
octavoA.agregarAlumnos(alumno2);
octavoA.agregarAlumnos(alumno3);
octavoA.agregarAlumnos(alumno4);
octavoA.agregarAlumnos(alumno5);

octavoA.getDetalleCurso();
