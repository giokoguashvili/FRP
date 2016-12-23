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

function Observer(onNext, onError, onComplete) {
    return {
        onNext: onNext,
        onError: onError,
        onComplete: onComplete
    }
}

function Observable(domElement, eventName) {
    let _domElement = domElement;
    let _eventName = eventName;

    function addEventOnDomElement(callback) {
         let handler = _domElement.addEventListener(eventName, callback);
         return handler;
    } 

    let _subscribe = function(observer) {
        let handler = addEventOnDomElement((e) => {
            observer.onNext(e);
        })

        return {
            dispose: function() {
                _domElement.removeListener(handler);
            }
        }
    }

    return {
        subscribe: _subscribe,
        forEach: function(output) {
            let observer = new Observer(output);
            _subscribe(observer);
        }
    }
}

Observable.fromEvent = function(domElement, eventname) {
    return new Observable(domElement, eventname);
}


