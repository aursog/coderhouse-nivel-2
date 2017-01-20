/**
 * Created by aurso on 12/26/16.
 */

(function(exports){
    var todoList = {};
    var tareas = [];

    var calcIdTarea = function() {
        if (tareas.length == 0) {
            return 1;
        } else {
            todoList.ordernarTareas("id", "asc");
            return parseInt(tareas[tareas.length - 1].id) + 1;
        }
    };

    todoList.agregarTarea = function(titulo, descripcion) {
        var tarea = {};
        tarea.id = calcIdTarea();
        tarea.titulo = titulo;
        tarea.descripcion = descripcion;
        tarea.ready = false;

        tareas.push(tarea);
        this.saveTareas();
    };

    todoList.editarTarea = function(id, titulo, descripcion) {
        var tareaAEditar = {};
        var indiceTarea = 0;
        var largoTareas = tareas.length;

        for (var i = 0; i < largoTareas; i++) {
            if (tareas[i].id == id) {
                tareaAEditar = tareas[i];
                indiceTarea = i;
                break;
            }
        }

        if (tareaAEditar.titulo != titulo) {
            tareaAEditar.titulo = titulo;
        }

        if (tareaAEditar.descripcion != descripcion) {
            tareaAEditar.descripcion = descripcion;
        }

        tareas[indiceTarea] = tareaAEditar;
    };

    todoList.traerTodasTareas = function() {
        return tareas;
    };

    todoList.buscarTarea = function(id) {
        var tareaEncontrada = {};

        tareas.forEach(function(tarea, indice) {
            if (tarea.id == id) {
                tareaEncontrada.tarea = tareas;
                tareaEncontrada.indice = indice;
                return tareaEncontrada;
            }
        });
    };

    todoList.eliminarTarea = function(id) {
        var confirmacion = confirm("Esta seguro que desea eliminar la tarea: " + id);

        if (confirmacion) {
            tareas.forEach(function (tarea, indice) {
                if (tarea.id == id) {
                    tareas.splice(indice, 1);
                    todoList.saveTareas();
                    return;
                }
            });
        }
    };

    todoList.cambiarEstadoTarea = function(id, estado) {
        tareas.forEach(function(tarea) {
           if (tarea.id == id) {
               tarea.ready = estado;
           }
        });
    };

    todoList.eliminarTodasTareas = function() {
        var confirma = confirm("Esta seguro que desea eliminar todas las tareas");

        if (confirma) {
            tareas = [];
            this.saveTareas()
        }
    };

    todoList.ordernarTareas = function(param, sort) {
        switch(param) {
            case "id":
                tareas.sort(function(a, b) {
                   if (sort == "asc") {
                       return a.id - b.id; // -1 --> 3 - 4
                   } else {
                       return b.id - a.id; // 1 --> 4 - 3
                   }
                });
                break;
            case "titulo":
                tareas.sort(function(a, b) {
                   if (sort == "asc") {
                       return -1
                   } else {
                       return 1
                   }
                });

                break;
            default:
                alert("Parámetro no definido");
        }
    };

    todoList.saveTareas = function() {
        localStorage.tareas = JSON.stringify(tareas);
    };

    todoList.getTareasFromLocal = function() {
        var tareasFromLocal = localStorage.getItem("tareas");

        if (tareasFromLocal === null) {
            tareas = [];
        } else {
            tareas = JSON.parse(tareasFromLocal);
        }
    };

    exports.TodoList = todoList;
})(window);