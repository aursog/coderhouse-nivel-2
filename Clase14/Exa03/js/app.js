/**
 * Created by aurso on 1/23/17.
 *
 * App.js - Archivo que gestiona el comportamiento de la aplicación
 */

function submitFormulario(event) {
    event.preventDefault();
    Formulario.clearErrores();

    if (Formulario.validaFormularioNotEmpty()) {
        var usuario = new Usuario({
            nombreCompleto: form.nombre.value,
            rut: form.rut.value,
            fechaNacimiento: form.fnac.value,
            username: form.username.value,
            passwd: form.passwd.value
        });

        TablaUsuarios.addUsuario(usuario);
        TablaUsuarios.renderNextValue();
        Formulario.clearFormulario(form);
    }
}

TablaUsuarios.render();

var form = document.forms['crear-user'];
form.addEventListener('submit', submitFormulario);

var clearButton = document.querySelector('#reset-form');
clearButton.addEventListener('click', function(event) {
    event.preventDefault();
    Formulario.clearErrores();
    Formulario.clearFormulario(form);
});