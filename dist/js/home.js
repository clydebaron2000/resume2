'use strict';
console.log("home");
interact('.draggable').draggable({
    listeners: {
        start(event) {
            event.target.classList.remove('cloud');
        },
        move(event) {
            event.target.classList.remove('cloud');
            const position = $(`#${event.target.getAttribute('id')}`).position();
            console.log(position);
            position.left += event.dx;
            position.top += event.dy;
            console.log(position);
            $(`#${event.target.getAttribute('id')}`).css({ top: position.top, left: position.left, position: 'absolute' });
        },
        end(event) {
            event.target.classList.add('cloud');
        },
    },
    inertia: {
        resistance: 30,
        minSpeed: 200,
        endSpeed: 100
    },
    restrict: {
        restriction: 'parent',
    },
})