define(["models/selectedCards"], function (selectedCards) {

    var Card = function () {
        this.indexParam = 5;
        this.selected = selectedCards;
    };

    /**
     *
     * @param name from URL --> :param
     * @param index from url --> *Splat
     */
    Card.prototype.activate = function (name, index) {
        this.indexParam = index;
    };

    /**
     * Before updating the index, w8 if the new Card is in the DOM
     * If not the new Binding is for some secs visible while switching to another Card
     */
    Card.prototype.attached = function () {
        selectedCards.setIndex(this.indexParam);
    };

    return Card;
});