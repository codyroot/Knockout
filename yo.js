var Klass = function () {
    this.prop = "my prop";
};

Klass.prototype.es3 = function () {

};

Object.defineProperty(Klass.prototype, "define", {
    value: function () {
        return this.prop;
    }
});

Object.defineProperties(Klass.prototype, {
    "getterSetter1": {
        get: function () {
        },
        set: function () {
        }
    },
    "method1": {
        value: function () {
        }
    }
});

console.log(Klass);
