var Klass = function () {
    this._private = "my prop";



};

Klass.prototype.gogo = function(){

};

Object.defineProperty(Klass.prototype, "private", {
    get: function () {
        return this._private;
    },
    set: function (value) {
        this._private = value;
    }
});

Object.defineProperty(Klass.prototype, "yo", {
    value: function(){
        return "YO"
    }
});

var k = new Klass();

