define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
            router.map([
                {
                    route: ['', 'activateLifeCycle'],
                    title: 'Page Life Cycle',
                    moduleId: 'viewmodels/pageLifeCycle',
                    nav: true
                },
                {
                    route: ['cards', 'flashcards'],
                    title: 'FlashCards',
                    moduleId: 'viewmodels/flashcards',
                    nav: true
                },
                {
                    route: 'about',
                    title: 'About',
                    moduleId: 'viewmodels/about',
                    nav: true
                },

                // Add a new Route
                {
                    route: 'cards/:param1*details', //*details is a Splat
                    // If params needed, the hash prop must be manually configured
                    hash: "#cards",
                    title: 'Cards',
                    moduleId: 'viewmodels/cards',
                    nav: false
                }

            ]).buildNavigationModel();

            return router.activate();
        },
        randomChecked: false,
        randomChanged: function () {
            app.trigger("randomChanged", this.randomChecked);
            return true;
        }
    };
});