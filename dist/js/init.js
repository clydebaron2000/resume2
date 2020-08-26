(function() {
    $.ajax({
        'async': true,
        'global': false,
        'url': "JSON/sources.json",
        'dataType': "json",
        'success': function(data) {
            for (const href of data.stylesheets) $("head").append($(`<link rel="stylesheet" href="${href}">`));
            for (const src of data.scripts) $.getScript(src);
        }
    });
})();
(function() {
    var json = null;
    $.ajax({
        'async': true,
        'global': true,
        'url': "JSON/data.json",
        'dataType': "json",
        'success': function(data) {
            json = data;
            var social = $('.social-icons');
            for (var contactType of data.contact) {
                social.append($("<a href='" + contactType.link + "'>").append($("<i class='" + contactType.faIcon + " fa-2x'>")));
            }
        }
    });
    return json;
})();