function Observable(func) {
    this._forEachEvent = func;
}

function createObserver(onNext, onError, onComplete) {
    return {
        onNext: onNext,
        onError: onError || function() {},
        onComplete: onComplete || function() {}
    }
}

Observable.prototype = {
    forEach: function(onNext, onError, onComplete) {
        return this._forEachEvent(
                createObserver(
                    onNext,
                    onError,
                    onComplete
                )
            );
    },
    map: function(projectionFunction) {
        let self = this;
        return new Observable(function(observer) {
            return self.forEach((evnt) => 
                observer.onNext(
                    projectionFunction(evnt)
                )
            ) 
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
