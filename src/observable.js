function Observer(onNext, onError, onComplete) {
    return {
        onNext: onNext,
        onError: onError,
        onComplete: onComplete
    }
}

function output(value) {
    console.log(value);
}




function Observable(func) {
    this._func = func;
}

Observable.prototype = {
    forEach: function(callback) {

    }
}

Observable.prototype.fromEvent = function(domElement, eventName) {
    return new Observable(function forEach(observer) {

    });
} 




var domElement = document.getElementsByClassName('box')[0];
var clickEvents = Observable.fromEvent(domElement, 'click');

clickEvents.forEach(function(e) {
    console.log(e);
});



