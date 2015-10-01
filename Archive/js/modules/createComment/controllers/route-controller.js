define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var CreateNewComment = require('../views/layout');

    var MapRouteController = Marionette.Controller.extend({
        showNewComment: function () {
            app.showLayout(new CreateNewComment);
        }
    });

    module.exports = new MapRouteController();
});
