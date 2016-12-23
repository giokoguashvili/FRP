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
    },
    filter: function(predicate) {
        let self = this;
        return new Observable(function(observer) {
            return self.forEach((evnt) => {
                if (predicate(evnt)) {
                    observer.onNext(evnt);
                }
            })
        });
    },
    take: function(num) {
        let self = this;
        return new Observable(function(observer) {
            let counter = 0;
            let subscription = self.forEach((e) => {
                observer.onNext(e);
                counter++;
                if (counter === num) {
                    subscription.dispose();
                }
            });
            return subscription;
        });
    }
    // takeUntil: function(observable) {
    //     let self = this;
    //     return new Observable(function(observer) {
    //         return observable.forEach(function(e) {

    //         })
    //     });
    // }
}

Observable.fromEvent = function(domElement, eventname) {
    return new Observable(function(observer) {
        let handler = (e) => observer.onNext(e);
        domElement.addEventListener(eventName, handler);
        return {
            dispose: () =>
                domElement.removeEventListener(eventname, handler)      
        }
    });
}
