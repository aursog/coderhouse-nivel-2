/**
 * Created by aurso on 1/25/17.
 */

(function(exports) {
    var Search = {};
    var Results = {};
    var _results;

    var _getResponse = function(query, callback) {
        $.ajax({
            url: "https://api.spotify.com/v1/search",
            data: {type: "album", q: query},
            dataType: "json",
            method: "get",
            beforeSend: function() {
                $('.empty-results p').hide();
                $('.empty-results img').show();
            },
            success: function(result) {
                $('.empty-results').hide();
                callback(result);
            }
        })
    };

    Search.getSearch = function() {
        var artist = $('#artist').val();

        if (artist) {
            _getResponse(artist, Results.render);
        }
    };

    Search.saveSearch = function() {
        localStorage.setItem('last-search', JSON.stringify(_results));
    };

    Search.clearLastSearch = function() {
        localStorage.removeItem('last-search');
    };

    Search.loadResults = function() {
        var lastSearch = localStorage.getItem('last-search');

        if (lastSearch !== undefined) {
            _results = JSON.parse(lastSearch);
        }
    };

    Results.firstgetNotLiked = function() {
        var index = _results.findIndex(function(element) {
            return element.dislike === undefined;
        });

        return index;
    };

    Results.render = function(results) {
        var firstgetNotLiked;
        Search.loadResults();

        if (results !== undefined) {
            Search.clearLastSearch();
            _results = results.albums.items;
            Search.saveSearch();
            $('#content').css('top', '0');
        }

        if (_results !== undefined) {
            firstgetNotLiked = Results.firstgetNotLiked();

            $('#content').show();
            $('#content').attr('data-id', _results[firstgetNotLiked].id);
            $('#content').css('background', 'url(' + _results[firstgetNotLiked].images[0].url + ') no-repeat');
            $('#content').css('background-size', '56%');
        }
    };

    var _changeResult = function(index) {
        if (!_results[index].dislike) {
            $('#content').attr('data-id', _results[index].id);
            $('#content').css('background', 'url(' + _results[index].images[0].url + ') no-repeat');
            $('#content').css('background-size', '56%');
        } else {
            _changeResult(index+1);
        }
    };

    Results.nextRegistry = function(dislike) {
        if (_results !== undefined) {
            var index = _results.findIndex(function(elements) {
                return elements.id == $('#content').attr('data-id');
            });

            _results[index].dislike = dislike;
            Search.saveSearch();

            _changeResult(index + 1);
        }
    };

    exports.Search = Search;
    exports.Results = Results;
})(this);

Results.render();

$('#search-button').on('click', function(e) {
    e.preventDefault();
    Search.getSearch();
});

$('#artist').keypress(function(e) {
    if (e.keyCode == 13) {
        Search.getSearch();
    }
});

$('#negative-vote').click(function() {
    Results.nextRegistry(true);
});

$('#positive-vote').click(function() {
    Results.nextRegistry(false);
});