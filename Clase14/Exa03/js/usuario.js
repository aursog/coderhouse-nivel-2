/**
 * Created by aurso on 1/23/17.
 *
 * Clase usuario - Determina el objeto usuario
 */

function Usuario(props) {
    var fechaCreacion = new Date();

    Persona.call(this, props);

    this.username = props.username;
    this.passwd = props.passwd;
    this.fechaCreacion = fechaCreacion.toDateString();
}

Usuario.prototype = Object.create(Persona.prototype);

Usuario.prototype.getUsername = function() {
    return this.username;
};

Usuario.prototype.getFechaCreacion = function() {
    return this.fechaCreacion;
};
