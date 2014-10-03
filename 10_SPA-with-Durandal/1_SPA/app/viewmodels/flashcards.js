define(["durandal/system", "services/flashCardService", "plugins/router"], function (sytem, service, router) {

    var ViewModel = function () {
        this.catalogNames = [];
        this.blubb = "Available Cards";

        // If the observable Plugin is activated, Durandal creates automatically an observable
        //this.blubb = ko.observable("Available Cards")
    };

    /**
     * Dummy Data
     * @returns {*}
     */
    ViewModel.prototype.activate = function () {
        var me = this;
        sytem.log("Activate is fired");

        // Promise return
        return service.catalogNames().done(function (data) {
            me.catalogNames = data;
        });
    };

    /**
     * Navigate to a Subpage
     * @param viewModel
     * @param event
     */
    ViewModel.prototype.goToCards = function aaa(viewModel, event) {
        sytem.log(viewModel);

        // Build the URL
        router.navigate('#cards/' + encodeURIComponent(viewModel) + "/id/0");
    };

    return ViewModel;
});