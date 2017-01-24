/**
 * Created by aurso on 1/23/17.
 *
 * Módulo TablaUsuario - Maneja las acciones sobre la tabla de usuarios
 */

(function(exports) {
    // Sabemos que es un arreglo de obj de tipo usuario
    var _listaUsuarios = [];
    var TablaUsuario = {};

    var _renderColumn = function(user, parent, position) {
        var index = position == -1 ? _listaUsuarios.length - 1 : position;
        var tr = document.createElement('div');
        var that = this;
        tr.setAttribute('class', 'tr');

        // Nombre de la persona
        var td = document.createElement('div');
        td.setAttribute('class', 'td');

        var tdTextContent = document.createTextNode(user.nombreCompleto);
        td.appendChild(tdTextContent);
        tr.appendChild(td);

        // Nombre de usuario
        var td = document.createElement('div');
        td.setAttribute('class', 'td');

        var tdTextContent = document.createTextNode(user.username);
        td.appendChild(tdTextContent);
        tr.appendChild(td);

        // RUT de la persona
        var td = document.createElement('div');
        td.setAttribute('class', 'td');

        var tdTextContent = document.createTextNode(user.rut);
        td.appendChild(tdTextContent);
        tr.appendChild(td);

        // Fecha creacion usuario
        var td = document.createElement('div');
        td.setAttribute('class', 'td');

        var tdTextContent = document.createTextNode(user.fechaCreacion);
        td.appendChild(tdTextContent);
        tr.appendChild(td);

        // opciones
        var td = document.createElement('div');
        td.setAttribute('class', 'td');

        var botonEditar = document.createElement('button');
        botonEditar.setAttribute('class', 'icon-table edit');
        botonEditar.setAttribute('data-id', index);
        botonEditar.onclick = function() {
            Formulario.cargarFormulario(_listaUsuarios[index]);
        };

        var txtEditar = document.createTextNode('E');
        botonEditar.appendChild(txtEditar);

        var botonEliminar = document.createElement('button');
        botonEliminar.setAttribute('class', 'icon-table danger');
        botonEliminar.setAttribute('data-id', index);
        botonEliminar.onclick = function() {
            _listaUsuarios.splice(index, 1);
            TablaUsuario.setUsuariosLocalStorage();
            TablaUsuario.refreshTabla();
        };

        var txtEliminar = document.createTextNode('X');
        botonEliminar.appendChild(txtEliminar);

        td.appendChild(botonEditar);
        td.appendChild(botonEliminar);

        tr.appendChild(td);

        // Se agrega al parent
        parent.appendChild(tr);

        var clear = document.createElement('div');
        clear.setAttribute('class', 'clear');
        parent.appendChild(clear);
    };

    TablaUsuario.addUsuario = function(user) {
        this.getUsuariosLocalStorage();
        _listaUsuarios.push(user);
        this.setUsuariosLocalStorage();
    };

    TablaUsuario.getUsuarios = function() {
        return _listaUsuarios;
    };

    TablaUsuario.setUsuariosLocalStorage = function() {
        if (_listaUsuarios.length > 0) {
            localStorage.setItem("lista-usuario", JSON.stringify(_listaUsuarios));
        }
    };

    TablaUsuario.getUsuariosLocalStorage = function() {
        var localStorageData = localStorage.getItem("lista-usuario");

        if (localStorageData !== null) {
            _listaUsuarios = JSON.parse(localStorageData);
        }
    };

    TablaUsuario.render = function() {
        this.getUsuariosLocalStorage();
        var largoUsuarios = _listaUsuarios.length;

        if (largoUsuarios > 0) {
            var parent = document.querySelector('.table-body');

            for (var i = 0; i < largoUsuarios; i++) {
                _renderColumn(_listaUsuarios[i], parent, i);
            }
        }
    };

    TablaUsuario.renderNextValue = function() {
        this.getUsuariosLocalStorage();
        var parent = document.querySelector('.table-body');
        var lastUser = _listaUsuarios.length - 1;
        _renderColumn(_listaUsuarios[lastUser], parent, -1);
    };

    TablaUsuario.refreshTabla = function() {
        var tabla = document.querySelector('.table-body');

        while(tabla.firstChild) {
            tabla.removeChild(tabla.firstChild);
        }

        this.render();
    };

    exports.TablaUsuarios = TablaUsuario;
})(window);