/**
 * Created by aurso on 1/23/17.
 *
 * Clase Persona - Determina el objeto Persona
 */

function Persona(props) {
    this.nombreCompleto = props.nombreCompleto;
    this.rut = props.rut;
    this.fechaNacimiento = props.fechaNacimiento;
}

Persona.prototype.getNombreCompleto = function() {
    return this.nombreCompleto;
};

Persona.prototype.getRut = function() {
    return this.rut;
};

Persona.prototype.getFechaNacimiento = function() {
    return this.fechaNacimiento;
};