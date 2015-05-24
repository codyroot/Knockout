var Klass = Object.create(Object.prototype, {
    init: {
        value: function(msg)  {
            var self = Object.create(this);
            self.msg = msg;
            return self;
        }
    },
    getMsg: {
        value: function() {
            return this.msg;
        }
    }
});

var k = Klass.init("asd");

var SubKlass = Object.create(Klass, {
    init: {
        value: function(msg, asd){
            var self = Klass.init.call(this, msg);
            self.asd = asd;
            return self;
        }
    },
    getAsd: {
        value: function(){
            return this.asd;
        }
    }
});

var s = SubKlass.init("cool", "hoho");