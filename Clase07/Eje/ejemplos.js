/**
 * Created by aurso on 12/21/16.
 */

/** Función auto-invocada con una variable global **/
var lala = {};

(function(variable){
})(lala);

/** Un espacio de nombre (namespace) **/
var lele = {};

lele = (function(){
    return; // tengo que retornar algo {}
})();

/** Namespaces 2 **/
var lele = {};

(function(variable) {
    variable.addNewLine = function() {

    }
})(lele);

/** Módulo **/
(function(exports) {
    var de_una_manera = {};

    exports.nombre_del_modulo = de_una_manera;

})(window);