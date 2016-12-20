/**
 * Created by aurso on 12/19/16.
 */


(function(exports) {
    var retorno = {};
    var pelicula = {
        title: "",
        id: 0,
        director: "",
        actores: []
    };

    var videoteca = [];
    retorno.addPelicula = function(title, id, director) {
        pelicula.title = title;
        pelicula.id = id;
        pelicula.director = director;

        videoteca.push(pelicula);
    };
    retorno.removePelicula = function(id, alternativa) {
        // Alternativa 1
        if (alternativa == 1) {
            var tmp = [];

            videoteca.forEach(function (pelicula) {
                if (pelicula.id != id) {
                    tmp.push(pelicula);
                }
            });

            return tmp;
        } else if (alternativa == 2) {
            var tmpIndex;

            // Alternativa 2
            for(var index in videoteca) {
                if (videoteca[index].id == id) {
                    tmpIndex = index;
                    break;
                }
            }

            if (tmpIndex !== undefined) {
                videoteca.splice(tmpIndex, 1);
            }
        }
    };
    retorno.listVideoteca = function() {
        return videoteca;
    }

    exports.videoteca = retorno;
})(window);