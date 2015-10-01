define(function(require, exports, module) {
    var Marionette = require('marionette');
    var RouteController = require('./controllers/route-controllers');

    module.exports = Marionette.AppRouter.extend({
        controller: RouteController,
        appRoutes: {
            // our default route
            'show-article/:id': 'showArticle'
        }
    });
});