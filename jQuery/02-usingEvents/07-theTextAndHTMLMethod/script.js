$(function () {
    $('#change-text').click(function () {
        $('#text').text('Hello, Friend');
    });

    $('#change-html').click(function () {
        $('#text').html('<a href="https://es.wikipedia.org/wiki/Mr._Robot">Hello, Friend</a>');
    });
});