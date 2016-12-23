function Observable() {

}

Observable.prototype = {
    forEach: function() {

    }
}

Observable.prototype.fromEvent = function(domElement, eventName) {
    return new Observable();
} 

var domElement = document.getElementsByClassName('box')[0];
var clickEvents = Observable.fromEvent(domElement, 'click');

clickEvents.forEach(function(e) {
    console.log(e);
});
