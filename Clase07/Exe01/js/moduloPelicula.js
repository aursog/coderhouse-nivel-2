/**
 * Created by aurso on 12/19/16.
 */

// ejemplo con espacios de nombre y módulos

var pelicula = {};

pelicula = (function() {
    // privada
    var indice = 0;
    var obj = {};

    obj.addPelicula = function(title, id, imbd, actores, etc, etc, etc) {
       /**
        * Desarrollo
        */
    };

    obj.getIndice = function() {
        return indice;
    }

    return obj;
})();

var patente = "BBSJ40";
var color = "rojo";

// modulo con la definición de un objeto dentro
(function(patente, color){
    function Auto(patente, color) {
        this.patente = patente;
        this.color = color;
    }

    Auto.prototype.getPatente = function() {
        return this.patente;
    }

    return new Auto(patente, color);
})(patente, color);

// namespace auto

var patente = "CXLD63";
var color = "gris";
var auto = {};

auto = (function(patente, color){
    function Auto(patente, color) {
        this.patente = patente;
        this.color = color;
    }

    Auto.prototype.getPatente = function() {
        return this.patente;
    }

    return new Auto(patente, color);
})(patente, color);

window.auto = auto;
