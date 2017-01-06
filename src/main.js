// API ver.1
function output(e) {
    console.log(e);
}

var domElement1 = document.getElementsByClassName('box')[0];

var events = Observable.fromEvent(domElement1, 'mousemove');
var clickEvents =  Observable.fromEvent(domElement1, 'click');

events
    .map((item) => {
        return {
            x: item.clientX,
            y: item.clientY
        };
    })
    .filter((e) => e.x > 150 && e.y > 150)
    .takeUntil(clickEvents)
    .forEach((item) => {
        console.log(item);
    });

// takeUntil API
// var parentDiv = document.getElementById('parent');
// var childDiv = document.getElementById('child')

// var mouseMoveEvents = Observable.fromEvent(parentDiv, 'mousemove');
// var mouseDownEvents = Observable.fromEvent(childDiv, 'mousedown');
// var mouseUpEvents = Observable.fromEvent(parentDiv, 'mouseup');

// var dragEvents = mouseDownEvents
//     .map((e) =>{
//         console.log(e)
//     })
//     .takeUntil();