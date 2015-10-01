define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var ItemCollection=require('../models/ItemCollection');

    module.exports = Marionette.ItemView.extend({
        id: 'home',
        template: '#home-layout'
        ,initialize: function(){
            var self=this;
            Marionette.ItemView.prototype.initialize.apply(this,arguments);
            this.collection=new ItemCollection();
            this.coolection.fetch().then(function(){
                console.log(self.collection);
            })
        }
    });
});