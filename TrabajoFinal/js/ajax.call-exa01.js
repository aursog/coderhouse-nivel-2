/**
 * Created by aurso on 1/25/17.
 */

/**
 * Una forma de llamar a un ajax sin recurrir a promesas
 * a través de una función anónima de callback
 */
var fx = function(callback) {
    $.ajax({
        url: "https://api.spotify.com/v1/search",
        data: {type: "album", q: "metallica"},
        dataType: "json",
        method: "get",
        success: function (result) {
            callback(result);
        }
    });
};

/**
 * Utiliza el resultado de la función que se desprende del ajax
 */
fx(function(data) {
   console.log(data);
});


(function(window) {
    var DatosPreload = {};
    var _preloadData = [];

    DatosPreload.firstLoad = function() {
        for (var i = 0; i < 10; i++) {
            $.ajax({
                url: "http://yesno.wtf/api",
                success: function(result) {
                    _preloadData.push(result);
                }
            });
        }
    };

    DatosPreload.preloadData = _preloadData;

    window.DatosPreload = DatosPreload;
})(window);

DatosPreload.firstLoad();

$('element').click(function() {
    var numero = Math.random() % 9;
    DatosPreload.preloadData[numero];
});