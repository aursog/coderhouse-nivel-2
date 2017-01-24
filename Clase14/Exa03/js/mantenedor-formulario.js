/**
 * Created by aurso on 1/23/17.
 *
 * Módulo Formulario - Maneja las acciones sobre el formulario
 */

(function(exports){
    var Formulario = {};

    Formulario.validaFormularioNotEmpty = function() {
        var flag = true;

        var inputsElements = document.querySelectorAll('.input-text');
        inputsElements.forEach(function(input) {
            if (input.value == "") {
                var classAttr = input.parentNode.getAttribute('class');
                input.parentNode.setAttribute('class', classAttr + " error");
                flag = false;
            }
        });

        return flag;
    };

    Formulario.clearFormulario = function(form) {
        form.reset();
    };

    Formulario.clearErrores = function() {
        var inputsDivs = document.querySelector('.inputs');
        var numInputs = inputsDivs.childElementCount;

        for (var i = 0; i < numInputs; i++) {
            var classAttr = inputsDivs.children[i].getAttribute('class');
            classAttr = classAttr.replace(" error", "");
            inputsDivs.children[i].setAttribute('class', classAttr);
        }
    };

    Formulario.cargarFormulario = function(user) {
        var form = document.forms['crear-user'];
        form.submitButton.style.display = "none";
        form.editButton.style.display = "";
        form.nombre.value = user.nombreCompleto;
        form.rut.value = user.rut;
        form.fnac.value = user.fechaNacimiento;
        form.username.value = user.username;
        form.passwd.value = user.passwd;
    };

    exports.Formulario = Formulario;
})(window);