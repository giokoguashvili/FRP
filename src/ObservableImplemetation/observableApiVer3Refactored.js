// // API ver.1
// new Observable(domElement, eventname).subscribe(new Observer(output));

// // API ver.2
// Observable.prototype = {
//     fromEvent: function(domElement, eventName) {
//         return new Observable(domElement, eventName);
//     }
// }
// Observable.fromEvent(domElement, eventName).subscribe(new Observer(output));

// // API ver.3
// var events = Observable.fromEvent(domElement, eventName);
// events.forEach(output);

function Observable(func) {
    this._func = func;
}

Observable.prototype = {
    forEach: function(onNext, onError, onComplete) {
        return this._func({
            onNext: onNext,
            onError: onError || function() {},
            onComplete: onComplete || function() {}
        });
    } 
}

Observable.fromEvent = function(domElement, eventname) {
    return new Observable(function(observer) {
        let handler = (e) => observer.onNext(e);
        domElement.addEventListener(eventName, handler);
        return {
            dispose: () =>
                domElement.removeListener(handler)      
        }
    });
}


