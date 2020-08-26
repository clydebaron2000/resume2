'use strict';
// so we don't have to copy past all the sources across evey page
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
const data = (function() {
    var json = null;
    $.ajax({
        'async': false,
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
console.log("main");
console.log(data);
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        showMenu = false;
    }
}