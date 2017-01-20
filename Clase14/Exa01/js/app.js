/**
 * Created by aurso on 1/18/17.
 */

function printNumeroPaginas(numero_paginas) {
    var first = "<span>&lt;&lt;</span>";
    var last = "<span>&gt;&gt;</span>";

    $('#paginator').html(first);

    for (var i = 1; i < (numero_paginas + 1); i++) {
        $('#paginator').append("<span class='pagina'>" + i + "</span>");
    }

    $('#paginator').append(last);

    $('#paginator .pagina').click(function() {
        var numPage = parseInt($(this).text());
        dataMeli($('#id_categoria').val(), numPage);
    });
}

function dataMeli(id_categoria, numPage) {
    var limit = 12;
    var offset = limit * numPage;

    var contenido = $('.product').eq(0).clone();
    $('.content .row').html(contenido);

    $.ajax({
        url: "https://api.mercadolibre.com/sites/MLC/search",
        data: {category: id_categoria, limit: limit, offset: offset},
        method: "get",
        dataType: "json",
        success: function(response) {
            var data = response.results;
            var cantidadResultados = response.paging.total;
            var numPaginas = Math.ceil(cantidadResultados / 12);

            if (numPaginas > 10) {
                printNumeroPaginas(10);
            } else {
                printNumeroPaginas(numPaginas);
            }

            data.forEach(function(elemento) {
                var contenido = $('.product').eq(0).clone();
                // contenido.find('.imagen').html("<img src='" + elemento.thumbnail + "' alt='" + elemento.id + "' />");
                contenido.find('.imagen img').attr("src", elemento.thumbnail).attr('alt', elemento.id);
                contenido.find('.price').text("$ " + elemento.price);
                contenido.find('.titulo').html("<a href='" + elemento.permalink +"' target='_blank'>" + elemento.title + "</a>");

                contenido.css("display", "block");
                $('.content .row').append(contenido);
            });
        }
    });
}

$('.menu-element').click(function() {
    var id_categoria = $(this).data("id");
    $('#id_categoria').val(id_categoria);

    dataMeli(id_categoria, 0);
});