/**
 * Created by aurso on 12/26/16.
 */

function crearTarea(event) {
    eventosTodoList.crearTarea();
    event.preventDefault();
}

eventosTodoList.initTodoList();

var form = document.forms[0];
form.addEventListener("submit", crearTarea);