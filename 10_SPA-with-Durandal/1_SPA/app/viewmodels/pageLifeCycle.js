define(["durandal/system"], function (sytem) {
    var ViewModel = function () {
    };

    /**
     * Fires before the page is data-binded
     * So its possible to get Data view ajax and bind
     * them to their Elements
     * !!!RETURN a promise so the LifeCycle will wait for the data!!!
     *
     * @param paramFromUrl Get Params
     * @returns {Deferred|*}
     */
    ViewModel.prototype.activate = function (paramFromUrl) {
        sytem.log("Activate is fired");

        // Promise return
        return sytem.defer(function (def) {
            setTimeout(function () {
                sytem.log("Site wait 1s and then loads");

                // Solves the Promise, page can be loaded
                def.resolve();
            }, 1000);
        });
    };

    /**
     * Fires before the Page is data bound
     */
    ViewModel.prototype.binding = function () {
        sytem.log("Binding is fired");
    };

    /**
     * Fires after the Page is data bound
     */
    ViewModel.prototype.bindingComplete = function () {
        sytem.log("BindingComplete is fired");
    };

    /**
     * Fires when the DOM of the View is available
     * Keep in mind that compose Bindings are not available
     */
    ViewModel.prototype.attached = function () {
        sytem.log("Attached fired");
    };

    /**
     * Fires when compositions are includes
     * DOM in compose bindings are here available
     * Custom Events across Multiple View should be defined here
     */
    ViewModel.prototype.compositionComplete = function () {
        sytem.log("compositionComplete fired");
    };

    /**
     * Fires when the view is removed from the DOM
     */
    ViewModel.prototype.detached = function () {
        sytem.log("detached fired");
        return false;
    };

    /**
     * If a User navigating to another Page this fn will be called
     * Durandal stops navigating if the fn returns false
     * False: This page cant deactivated
     */
    ViewModel.prototype.canDeactivate = function () {
        return true;
    };

    /**
     * Current page can called
     * true: Navigation to this page is possible
     * false : This Page cannot activate from another Page
     * {redirect: "#route"}
     */
    ViewModel.prototype.canActivate = function () {
        return true;
        //return {
        //  redirect: "#about"
        //}
    };

    /**
     * Returns HTML for the view
     */
//    ViewModel.prototype.getView = function () {
//    };

    /**
     * URL to an HTML File, instead using the naming conventions
     */
//    ViewModel.prototype.viewUrl = function () {
//
//    };

    return ViewModel;
});