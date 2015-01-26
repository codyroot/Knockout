class Knockout {

    name:KnockoutObservable;
    ps:String;

    constructor() {
        this.name = ko.observable();
        this.ps = "asd";
    }

    go():void {

    }
}

var k:Knockout = new Knockout();

k.go();

// Commited
