/**
 * Created by aurso on 12/21/16.
 */

(function(exports) {
    var diario = {};
    var noticias = [];

    diario.getLastId = function() {
        if (noticias.length !== 0) {
            Diario.sortNoticias("id");
            return parseInt(noticias[noticias.length-1].id) + 1;
        }

        return 1;
    };

    diario.crearNoticia = function(titulo, descripcion, imagen) {
        var noticia = {};
        noticia.id = Diario.getLastId();
        noticia.titulo = titulo;
        noticia.descripcion = descripcion;
        noticia.imagen = imagen;

        noticias.push(noticia);
    };

    diario.existeNoticia = function(noticia) {
        var existeNoticia = noticias.find(function(news) {
            return noticia.id == news.id;
        });

        return existeNoticia !== undefined;
    };

    diario.eliminarNoticia = function(id) {
        noticias.forEach(function(noticia, indice) {
           if (noticia.id == id) {
               noticias.splice(indice, 1);
               return;
           }
        });
    };

    diario.sortNoticias = function(parametro) {
        switch(parametro) {
            case "id":
                noticias.sort(function(a, b) {
                    return a["id"] - b["id"];
                });
                break;
            case "titulo":
                noticias.sort(function(a, b) {
                    if (a.titulo > b.titulo) {
                        return 1
                    } else if (a.titulo < b.titulo) {
                        return -1
                    }

                    return 0
                });
                break;
            default:
                console.log("Parametro desconocido");
        }
    };

    diario.saveNoticias = function() {
        localStorage.noticias = JSON.stringify(noticias);
    };

    diario.getNoticiasDB = function() {
        var localNoticias = localStorage.getItem("noticias");

        if (localNoticias !== undefined) {
            noticias = JSON.parse(localNoticias);
        } else {
            noticias = [];
        }
    };

    diario.getNoticias = function() {
        return noticias;
    };

    diario.setNoticias = function(arrNoticia) {
        noticias = arrNoticia;
    }

    exports.Diario = diario; // window.Diario = diario
})(window);
