define(["models/selectedCards", "plugins/router"], function (selectedCards, router) {

    var Cards = function () {
        this.selected = selectedCards;
        this.nameParam = "";
    };

    // Define the Relationship to the cards route
    Cards.prototype.router =
        router
            .createChildRouter()
            .makeRelative({
                // Routes from Mainrouter
                route: "cards/:param1"
            })
            .map([
                {
                    // (/:param2) --> optional param
                    route: ["id(/:param2)", ""],
                    moduleId: "viewmodels/cardView"
                }
            ])
            .buildNavigationModel();

    Cards.prototype.activate = function (urlParamOne) {
        this.nameParam = urlParamOne;
    };

    Cards.prototype.attached = function () {
        return selectedCards.select(this.nameParam);
    };

    // Routing Navigation Helper
    Cards.prototype.navigate = function (index) {
        var url = "#cards/" + encodeURIComponent(selectedCards.name) + "/id/" + index;
        router.navigate(url);
    };

    Cards.prototype.next = function () {
        if (selectedCards.hasNext) {
            this.navigate(selectedCards.nextIndex());
        }
    };

    Cards.prototype.previous = function () {
        if (selectedCards.hasPrevious) {
            this.navigate(selectedCards.previousIndex());
        }
    };

    return Cards;
});