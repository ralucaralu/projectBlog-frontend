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

this["JST"]["#home-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<br/><div id="myCarousel" data-ride="carousel" float="center" class="carouselslide"><ol class="carousel-indicators"><li data-target="#myCarousel" data-slide-to="0" class="active"></li><li data-target="#myCarousel" data-slide-to="1"></li><li data-target="#myCarousel" data-slide-to="2"></li><li data-target="#myCarousel" data-slide-to="3"></li><li data-target="#myCarousel" data-slide-to="4"></li></ol><div role="listbox" class="carousel-inner"><div class="item active"><img src="../../static/poza.jpg"/></div><div class="item"><img src="../../static/ceasuri.jpg"/></div><div class="item"><img src="../../static/bici.jpg"/></div><div class="item"><img src="../../static/flori.jpg"/></div><div class="item"><img src="../../static/images.jpg"/></div></div><a href="#myCarousel" role="botton" data-slide="prev" class="left carousel-control"><span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span><span class="sr-only">Previous</span></a><a href="#myCarousel" role="botton" data-slide="next" class="right carousel-control"><span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span><span class="sr-only">Next</span></a></div>';

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