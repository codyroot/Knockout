var Klass = function () {
    this._private = "my prop";
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
    value: "YO",
    writable: false
});

var k = new Klass();

