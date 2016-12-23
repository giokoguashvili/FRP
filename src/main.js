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
events.forEach(output);