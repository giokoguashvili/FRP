// API ver.1
function output(e) {
    console.log(e);
}

var domElement = document.getElementsByClassName('box')[0];
var eventName = 'mousemove';


// API ver.1
//new Observable(domElement, eventName).subscribe(new Observer(output));

// API ver.2
//Observable.fromEvent(domElement, eventName).subscribe(new Observer(output));

// API ver.3
var events = Observable.fromEvent(domElement, eventName);

events
    .map((item) => {
        return {
            x: item.clientX,
            y: item.clientY
        };
    })
    .filter((e) => e.x > 200 && e.y > 200)
    .take(10)
    .forEach((item) => {
        console.log(item);
    });

// // takeUntil API
// var parentDiv = document.getElementById('parent');
// var childDiv = document.getElementById('child')

// var mouseMoveEvents = Observable.fromEvent(parentDiv, 'mousemove');
// var mouseDownEvents = Observable.fromEvent(childDiv, 'mousedown');