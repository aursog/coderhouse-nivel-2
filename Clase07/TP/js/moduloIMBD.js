/**
 * Created by aurso on 12/19/16.
 */

(function(objWindow){
    var imdb = {};
    var peliculas = [];

    var existePelicula = function(film) {
        var peliEnArray = peliculas.find(function (pelicula) {
            return pelicula.id == film.id;
        });

        return peliEnArray !== undefined;


        /*for (index in peliculas) {
            if (peliculas[index].id == film.id) {
                return false;
            }
        }

        return true;*/
    };

    imdb.agregarPelicula = function(id, title) {
      var film = {
          id: id,
          titulo: title
      };

      if (!existePelicula(film)) {
          peliculas.push(film);
      } else {
          console.log("Pelicula ya se encuentra en IMDB");
      }
    };

    imdb.eliminarPelicula = function(id) {
        for (index in peliculas) {
            if (peliculas[index].id == id) {
                peliculas.splice(index, 1);
                break;
            }
        }
    };

    imdb.ordenarPeliculas = function (parametro) {
        switch(parametro) {
            case "id":
                peliculas.sort(function(a, b) {
                    return a["id"] - b["id"];
                });
                break;
            case "titulo":
                peliculas.sort(function(a, b) {
                    if (a.titulo > b.titulo) {
                        return 1;
                    } else if (a.titulo < b.titulo) { 
                        return -1;
                    }

                    return 0;
                });
                break;
            default:
                console.log("Parámetro desconocido (O.O)")
                break;
        }
    };

    imdb.savePeliculas = function() {
        var strTmp = [];

        for (index in peliculas) {
            strTmp.push('{"id": "' + peliculas[index].id + '", "titulo": "' + peliculas[index].titulo + '"}');
        }

        localStorage.peliculas = "[" + strTmp.toString() + "]";
    };

    imdb.getPeliculas = function() {
        peliculas = JSON.parse(localStorage.getItem("peliculas"));
    };

    imdb.listaPeliculas = function() {
        return peliculas;
    };

    // lo mismo, pero con otro nombre window.imdb = imdb;
    objWindow.imdb = imdb;
})(window);