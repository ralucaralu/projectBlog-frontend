define(function(require, exports, module) {
    var app = require('app');
    var HomeRouter = require('modules/home/router');
    var ContactPage=require('modules/contact/router');
    var CreateArticle=require('modules/createArticle/router');
    var ShowArticle=require('modules/showArticle/router');
    var UpdateArticle=require('modules/updateArticle/router');
    var CreateComment=require('modules/createComment/router');


    var RouterInitializer = Marionette.Controller.extend({
        initialize: function() {
            app.on('initialize:after', function(){
                new HomeRouter();
                new ContactPage();
                new CreateArticle();
                new ShowArticle();
                new UpdateArticle();
                new CreateComment();
            });
        }
    });

    module.exports = new RouterInitializer();
});
