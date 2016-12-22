/**
 * Created by aurso on 12/21/16.
 */

var crearNoticiaForm = function(event) {
    var titulo = document.querySelector('#titulo').value;
    var descripcion = document.querySelector('#descripcion').value;
    var foto = document.querySelector('#foto').value;

    Diario.crearNoticia(titulo, descripcion, foto);
    Diario.saveNoticias();
    mostrarNoticia();

    event.preventDefault();
};

var form = document.querySelector("form");
form.addEventListener("submit", crearNoticiaForm);
mostrarNoticia();



