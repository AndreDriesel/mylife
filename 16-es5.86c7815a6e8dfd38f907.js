function _defineProperties(l,n){for(var u=0;u<n.length;u++){var o=n[u];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(l,o.key,o)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{JLuJ:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J"),t=function l(){_classCallCheck(this,l)},e=u("pMnS"),i=u("MKJQ"),r=u("sZkV"),a=u("SVse"),b=function(){function l(n,u){_classCallCheck(this,l),this.httpClient=n,this.navCtrl=u}return _createClass(l,[{key:"ionViewWillEnter",value:function(){this.loadImages()}},{key:"loadImages",value:function(){var l=this;this.loremImgSub=this.httpClient.get("https://picsum.photos/v2/list?page=2&limit=20"),this.loremImgSub.subscribe((function(n){console.log(n),n.forEach((function(l){l.random=Math.floor(10*Math.random())+1,l.imgPath="https://picsum.photos/id/"+l.id+"/100/100"})),l.loremImgs=n}))}},{key:"nextPage",value:function(l){console.log(l),this.navCtrl.navigateForward("/tabs/tab1/category",l)}}]),l}(),s=u("IheW"),c=o.mb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:translucent}ion-avatar.profil-avatar[_ngcontent-%COMP%]{height:80px;width:80px;border:3px solid transparent;border-radius:80px;background-image:-webkit-gradient(linear,left top,left bottom,from(white),to(white)),-webkit-gradient(linear,left top,right top,from(red),color-stop(orange),color-stop(yellow),color-stop(green),color-stop(deepskyblue),color-stop(blue),color-stop(darkviolet),to(fuchsia));background-image:linear-gradient(white,#fff),linear-gradient(to right,red,orange,#ff0,green,#00bfff,#00f,#9400d3,#f0f);background-origin:border-box;background-clip:content-box,border-box}.profil-text-top[_ngcontent-%COMP%]{font-size:large;font-weight:800}.profil-text-bottom[_ngcontent-%COMP%]{font-size:smaller}ion-thumbnail[_ngcontent-%COMP%]{height:45px;width:60px}ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5px}"]],data:{}});function f(l){return o.Hb(0,[(l()(),o.ob(0,0,null,null,10,"ion-item",[["detail",""]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.nextPage(l.context.$implicit)&&o),o}),i.T,i.q)),o.nb(1,49152,null,0,r.F,[o.h,o.k,o.x],{detail:[0,"detail"]},null),(l()(),o.ob(2,0,null,0,2,"ion-thumbnail",[["slot","start"]],null,null,null,i.db,i.A)),o.nb(3,49152,null,0,r.ub,[o.h,o.k,o.x],null,null),(l()(),o.ob(4,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),o.ob(5,0,null,0,2,"ion-label",[],null,null,null,i.U,i.r)),o.nb(6,49152,null,0,r.L,[o.h,o.k,o.x],null,null),(l()(),o.Fb(7,0,["Kategorie ",""])),(l()(),o.ob(8,0,null,0,2,"ion-note",[["mode","ios"],["slot","end"]],null,null,null,i.X,i.u)),o.nb(9,49152,null,0,r.T,[o.h,o.k,o.x],{mode:[0,"mode"]},null),(l()(),o.Fb(10,0,["",""]))],(function(l,n){l(n,1,0,""),l(n,9,0,"ios")}),(function(l,n){l(n,4,0,n.context.$implicit.imgPath),l(n,7,0,n.context.index+1),l(n,10,0,n.context.$implicit.random)}))}function p(l){return o.Hb(0,[(l()(),o.ob(0,0,null,null,6,"ion-header",[],null,null,null,i.R,i.o)),o.nb(1,49152,null,0,r.z,[o.h,o.k,o.x],{translucent:[0,"translucent"]},null),(l()(),o.ob(2,0,null,0,4,"ion-toolbar",[],null,null,null,i.fb,i.C)),o.nb(3,49152,null,0,r.xb,[o.h,o.k,o.x],null,null),(l()(),o.ob(4,0,null,0,2,"ion-title",[],null,null,null,i.eb,i.B)),o.nb(5,49152,null,0,r.vb,[o.h,o.k,o.x],null,null),(l()(),o.Fb(-1,0,[" dein Profil "])),(l()(),o.ob(7,0,null,null,44,"ion-content",[],null,null,null,i.O,i.l)),o.nb(8,49152,null,0,r.s,[o.h,o.k,o.x],{fullscreen:[0,"fullscreen"]},null),(l()(),o.ob(9,0,null,0,6,"ion-header",[["collapse","condense"]],null,null,null,i.R,i.o)),o.nb(10,49152,null,0,r.z,[o.h,o.k,o.x],{collapse:[0,"collapse"]},null),(l()(),o.ob(11,0,null,0,4,"ion-toolbar",[],null,null,null,i.fb,i.C)),o.nb(12,49152,null,0,r.xb,[o.h,o.k,o.x],null,null),(l()(),o.ob(13,0,null,0,2,"ion-title",[["size","large"]],null,null,null,i.eb,i.B)),o.nb(14,49152,null,0,r.vb,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.Fb(-1,0,["dein Profil"])),(l()(),o.ob(16,0,null,0,26,"ion-grid",[],null,null,null,i.Q,i.n)),o.nb(17,49152,null,0,r.y,[o.h,o.k,o.x],null,null),(l()(),o.ob(18,0,null,0,24,"ion-row",[["class","ion-text-center"]],null,null,null,i.Y,i.v)),o.nb(19,49152,null,0,r.eb,[o.h,o.k,o.x],null,null),(l()(),o.ob(20,0,null,0,4,"ion-col",[],null,null,null,i.N,i.k)),o.nb(21,49152,null,0,r.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(22,0,null,0,2,"ion-avatar",[["class","profil-avatar"]],null,null,null,i.E,i.b)),o.nb(23,49152,null,0,r.d,[o.h,o.k,o.x],null,null),(l()(),o.ob(24,0,null,0,0,"img",[["src","../../assets/images/av_doreen"]],null,null,null,null,null)),(l()(),o.ob(25,0,null,0,5,"ion-col",[["class","ion-align-self-center"]],null,null,null,i.N,i.k)),o.nb(26,49152,null,0,r.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(27,0,null,0,1,"div",[["class","profil-text-top"]],null,null,null,null,null)),(l()(),o.Fb(-1,null,["12"])),(l()(),o.ob(29,0,null,0,1,"div",[["class","profil-text-bottom"]],null,null,null,null,null)),(l()(),o.Fb(-1,null,["Kategorien"])),(l()(),o.ob(31,0,null,0,5,"ion-col",[["class","ion-align-self-center"]],null,null,null,i.N,i.k)),o.nb(32,49152,null,0,r.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(33,0,null,0,1,"div",[["class","profil-text-top"]],null,null,null,null,null)),(l()(),o.Fb(-1,null,["40"])),(l()(),o.ob(35,0,null,0,1,"div",[["class","profil-text-bottom"]],null,null,null,null,null)),(l()(),o.Fb(-1,null,["Fotos"])),(l()(),o.ob(37,0,null,0,5,"ion-col",[["class","ion-align-self-center"]],null,null,null,i.N,i.k)),o.nb(38,49152,null,0,r.r,[o.h,o.k,o.x],null,null),(l()(),o.ob(39,0,null,0,1,"div",[["class","profil-text-top"]],null,null,null,null,null)),(l()(),o.Fb(-1,null,["12.492"])),(l()(),o.ob(41,0,null,0,1,"div",[["class","profil-text-bottom"]],null,null,null,null,null)),(l()(),o.Fb(-1,null,["Abonnenten"])),(l()(),o.ob(43,0,null,0,8,"ion-list",[],null,null,null,i.W,i.s)),o.nb(44,49152,null,0,r.M,[o.h,o.k,o.x],null,null),(l()(),o.ob(45,0,null,0,4,"ion-list-header",[],null,null,null,i.V,i.t)),o.nb(46,49152,null,0,r.N,[o.h,o.k,o.x],null,null),(l()(),o.ob(47,0,null,0,2,"ion-label",[],null,null,null,i.U,i.r)),o.nb(48,49152,null,0,r.L,[o.h,o.k,o.x],null,null),(l()(),o.Fb(-1,0,["Kategorien"])),(l()(),o.db(16777216,null,0,1,null,f)),o.nb(51,278528,null,0,a.i,[o.L,o.I,o.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,1,0,!0),l(n,8,0,!0),l(n,10,0,"condense"),l(n,14,0,"large"),l(n,51,0,u.loremImgs)}),null)}var d=o.kb("app-tab1",b,(function(l){return o.Hb(0,[(l()(),o.ob(0,0,null,null,1,"app-tab1",[],null,null,null,p,c)),o.nb(1,49152,null,0,b,[s.c,r.Cb],null,null)],null,null)}),{},{},[]),h=u("s7LF"),g=u("qtYk"),x=u("iInd");u.d(n,"Tab1PageModuleNgFactory",(function(){return k}));var k=o.lb(t,[],(function(l){return o.wb([o.xb(512,o.j,o.W,[[8,[e.a,d]],[3,o.j],o.v]),o.xb(4608,a.k,a.j,[o.s,[2,a.q]]),o.xb(4608,r.a,r.a,[o.x,o.g]),o.xb(4608,r.Bb,r.Bb,[r.a,o.j,o.p]),o.xb(4608,r.Eb,r.Eb,[r.a,o.j,o.p]),o.xb(4608,h.d,h.d,[]),o.xb(1073742336,a.b,a.b,[]),o.xb(1073742336,r.zb,r.zb,[]),o.xb(1073742336,h.c,h.c,[]),o.xb(1073742336,h.a,h.a,[]),o.xb(1073742336,g.a,g.a,[]),o.xb(1073742336,x.n,x.n,[[2,x.s],[2,x.m]]),o.xb(1073742336,t,t,[]),o.xb(1024,x.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);