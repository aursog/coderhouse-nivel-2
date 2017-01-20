/**
 * Created by aurso on 12/26/16.
 */

(function(exports) {
    var eventosTodoList = {};

    eventosTodoList.mostrarTareas = function () {
        var tareas = TodoList.traerTodasTareas();
        var listaTareasSection = document.querySelector(".lista-tareas");

        tareas.forEach(function(tarea) {
            var divColumn = document.createElement("div");
            divColumn.setAttribute("class", "column-tareas");

            var tituloElemento = document.createElement("h3");
            var txtTituloElemento = document.createTextNode("Título: " + tarea.titulo);
            tituloElemento.appendChild(txtTituloElemento);

            divColumn.appendChild(tituloElemento);
            listaTareasSection.appendChild(divColumn);

            var divColumn = document.createElement("div");
            divColumn.setAttribute("class", "column-tareas");

            var descripcionElemento = document.createElement("p");
            var txtDescripcion = document.createTextNode(tarea.descripcion);
            descripcionElemento.appendChild(txtDescripcion);

            divColumn.appendChild(descripcionElemento);
            listaTareasSection.appendChild(divColumn);

            var divBotonera = document.createElement("div");
            divBotonera.setAttribute("class", "botonera");

            var editarButton = document.createElement("button");
            editarButton.setAttribute("class", "editar");
            editarButton.onclick = function() {};

            var txtEditarButton = document.createTextNode("Editar");
            editarButton.appendChild(txtEditarButton);

            var finalizarButton = document.createElement("button");
            finalizarButton.setAttribute("class", "finalizar");
            finalizarButton.onclick = function() {
                TodoList.cambiarEstadoTarea(tarea.id, true);
            };

            var txtFinalizarButton = document.createTextNode("Finalizar");
            finalizarButton.appendChild(txtFinalizarButton);

            var eliminarButton = document.createElement("button");
            eliminarButton.setAttribute("class", "eliminar");
            eliminarButton.addEventListener("click", function(ev) {
                TodoList.eliminarTarea(tarea.id);
                eventosTodoList.mostrarTareas();
            });
            /*eliminarButton.onclick = function() {
                TodoList.eliminarTarea(tarea.id);
                eventosTodoList.mostrarTareas();
            };*/

            var txtEliminarButton = document.createTextNode("Eliminar");
            eliminarButton.appendChild(txtEliminarButton);

            divBotonera.appendChild(editarButton);
            divBotonera.appendChild(finalizarButton);
            divBotonera.appendChild(eliminarButton);

            listaTareasSection.appendChild(divBotonera);
        });
    };

    eventosTodoList.initTodoList = function () {
        TodoList.getTareasFromLocal();
        eventosTodoList.mostrarTareas();
    };

    eventosTodoList.crearTarea = function() {
        var tituloTarea = document.querySelector(".titulo").value;
        var descripcionTarea = document.querySelector(".descripcion").value;

        if (tituloTarea === "" || descripcionTarea === "") {
            alert("Debe ingresar un titulo o una descripción");
            return;
        }

        TodoList.agregarTarea(tituloTarea, descripcionTarea)
        this.mostrarTareas()
    };

    exports.eventosTodoList = eventosTodoList;
})(window);