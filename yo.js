var myFunc = (function yo() {
    var a = "my Var";
    var b = [1, 2, 3];
    var c = {
        a: 1,
        b: 2
    };
    var d = function () {
    };


    return {
        d: d
    }
}());


var myObj = {
    prop: "my Prop",
    fn: function () {
    }
};

function fn() {
    var e = "my E";

    function a() {
    };
    return e;
};

var es5 = Object.create(null, {
    prop: {
        value: "10"
    },
    getterSetter: {
        get: function () {
        },
        set: function () {
        }
    },
    method: {
        value: function () {
        }
    }
});

var Klass = function () {
    this.prop = "my prop";
};

Klass.prototype.aha = function () {

};

Object.defineProperties(Klass.prototype, {
    "prop1": {
        value: "10"
    },
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

Object.defineProperty(Klass.prototype, "blubb", {
    value: "asd"
});

Object.defineProperty(Klass.prototype, "yope", {
    value: function(){
        return "YOPE";
    }
});

var klass = new Klass();
console.dir(klass);