var Klass = function () {
    this.prop = "my prop";
};

Klass = Object.defineProperties(Klass.prototype, {
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
