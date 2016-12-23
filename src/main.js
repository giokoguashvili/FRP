// API ver.1


function output(e) {
    console.log(e);
}

var domElement = document.getElementsByClassName('box')[0];
var eventName = 'mousemove';

new Observable(domElement, eventName).subscribe(new Observer(output));