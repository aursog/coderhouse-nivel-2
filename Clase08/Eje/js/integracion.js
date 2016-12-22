/**
 * Created by aurso on 12/21/16.
 */

function mostrarNoticia() {
    Diario.getNoticiasDB();

    var noticias = Diario.getNoticias() || [];
    Diario.setNoticias(noticias);

    noticias.forEach(function (noticia) {
        var elementoNoticia = document.createElement("div");

        // Titulo
        var tituloNoticia = document.createElement("h1");
        var textoTituloNoticia = document.createTextNode(noticia.titulo);

        tituloNoticia.appendChild(textoTituloNoticia);
        elementoNoticia.appendChild(tituloNoticia);

        // Cuerpo noticia
        var cuerpoNoticia = document.createElement("p");
        var textoCuerpoNoticia = document.createTextNode(noticia.descripcion);

        cuerpoNoticia.appendChild(textoCuerpoNoticia);
        elementoNoticia.appendChild(cuerpoNoticia);

        // Imagen noticia
        var imagenNoticia = document.createElement("img");
        imagenNoticia.setAttribute("src", noticia.imagen);

        elementoNoticia.appendChild(imagenNoticia);

        document.body.appendChild(elementoNoticia);
    });
}