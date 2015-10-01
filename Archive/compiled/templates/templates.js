this["JST"] = this["JST"] || {};

this["JST"]["#app-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="sidebar"></div><div id="container" class="container"></div>';

}
return __p
};

this["JST"]["#contact-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span>Contact</span>';

}
return __p
};

this["JST"]["#createArticle-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Create new article</h2><div class="input-group"><input id="articleTitle" placeholder="Titlu articol" aria-describedby="basic-addon1" class="text form-control"/></div><br/><div class="input-group"><textarea id="articleDescription" placeholder="Descriere articol" aria-describedby="basic-addon2" class="text form-control"></textarea></div><br/><div class="input-group"><textarea id="articleContent" placeholder="Continut articol" aria-describedby="basic-addon3" class="text form-control"></textarea></div><br/><button id="saveButton" class="btn btn-default">Save</button>';

}
return __p
};

this["JST"]["#createComment-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Create new comment</h2><div class="input-group"><textarea id="commentContent" placeholder="Continut comentariu" aria-describedby="basic-addon3" class="text form-control"></textarea></div><br/><button id="saveButton" class="btn btn-default">Save</button>';

}
return __p
};

this["JST"]["#home-item"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>' +
__e( model.title ) +
'</h2><hr/><p>' +
__e( model.description ) +
'</p>';

}
return __p
};

this["JST"]["#home-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<body></body><br/><div id="myCarousel" data-ride="carousel" float="center" class="carouselslide"><ol class="carousel-indicators"><li data-target="#myCarousel" data-slide-to="0" class="active"></li><li data-target="#myCarousel" data-slide-to="1"></li><li data-target="#myCarousel" data-slide-to="2"></li><li data-target="#myCarousel" data-slide-to="3"></li><li data-target="#myCarousel" data-slide-to="4"></li></ol><div role="listbox" class="carousel-inner"><div class="item active"><img src="../../static/poza.jpg"/></div><div class="item"><img src="../../static/ceasuri.jpg"/></div><div class="item"><img src="../../static/bici.jpg"/></div><div class="item"><img src="../../static/flori.jpg"/></div><div class="item"><img src="../../static/images.jpg"/></div></div><a href="#myCarousel" role="botton" data-slide="prev" class="left carousel-control"><span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span><span class="sr-only">Previous</span></a><a href="#myCarousel" role="botton" data-slide="next" class="right carousel-control"><span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span><span class="sr-only">Next</span></a></div><div class="row"><div id="articole"><div class="articole-content col-md-3"><h2>titlul articolului</h2><p>Cea mai mare glorie nu o dob�nde�ti atunci c�nd nu e�ti dobor�t niciodat�, ci atunci c�nd te ridici dup� ce ai c�zut. � Confucius</p></div><div class="articole-content col-md-3"><h2>titlul articolului</h2><p>Indiferent ce faci �n via��, va fi nesemnificativ. Dar e foarte important s� o faci. � Mahatma Gandhi</p></div></div></div>';

}
return __p
};

this["JST"]["#navigation-navbar"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<nav class="navbar navbar-inverse"><div class="container-fluid"><div><ul class="nav navbar-nav"><li class="active"><a href="#">Acasa</a></li><li class="dropdown"><a data-toggle="dropdown" href="#" class="dropdown-toggle">Categorii<span class="caret"></span></a><ul class="dropdown menu"><li><a href="#">Viata</a></li><li><a href="#">Dragoste</a></li><li><a href="#">Copilarie</a></li><li><a href="#">Amuzament</a></li></ul></li><li><a href="#">Despre mine</a></li><li><a href="#">Contact</a></li></ul></div></div></nav>';

}
return __p
};

this["JST"]["#showArticle-article-comment"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h5>Comment details</h5>';

}
return __p
};

this["JST"]["#showArticle-article-details"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>This is my article<span>' +
__e( model.title ) +
'</span><span>' +
__e( model.description ) +
'</span></h2>';

}
return __p
};

this["JST"]["#showArticle-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="show-article-details"></div><div id="show-article-commnts"></div>';

}
return __p
};

this["JST"]["#updateArticle-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Update article</h2><div class="input-group"><input id="updateTitle" placeholder="' +
__e( model.title ) +
'" aria-describedby="basic-addon1" class="text form-control"/></div><br/><div class="input-group"><textarea id="updateDescription" placeholder="' +
__e( model.description ) +
'" aria-describedby="basic-addon2" class="text form-control"></textarea></div><br/><div class="input-group"><textarea id="updateContent" placeholder="' +
__e( model.content ) +
'" aria-describedby="basic-addon3" class="text form-control"></textarea></div><br/><button id="saveButton" class="btn btn-default">Update articles</button>';

}
return __p
};