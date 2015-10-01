define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    var ItemCollection = require('../models/itemCollection');

    module.exports = Marionette.ItemView.extend({
        template: '#home-item'
    });
});