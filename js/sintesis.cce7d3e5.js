(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sintesis","chunk-4e410830"],{"0666":function(e,t,n){},"13f0":function(e,t,n){"use strict";n("450b")},"159b":function(e,t,n){var i=n("da84"),r=n("fdbc"),s=n("17c2"),a=n("9112");for(var o in r){var c=i[o],l=c&&c.prototype;if(l&&l.forEach!==s)try{a(l,"forEach",s)}catch(u){l.forEach=s}}},"17c2":function(e,t,n){"use strict";var i=n("b727").forEach,r=n("a640"),s=r("forEach");e.exports=s?[].forEach:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}},3079:function(e,t,n){"use strict";n("0666")},"30b2":function(e,t,n){e.exports=n.p+"img/sintesis.90ded96b.png"},"3cd8":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid banner-interno"},[n("div",{staticClass:"banner-interno__fondo"}),n("div",{staticClass:"container"},[n("div",{staticClass:"banner-interno__titulo py-5"},[n("h3",{staticClass:"text-uppercase",domProps:{innerHTML:e._s("Unidad "+e.globalData.numeroUnidad+". "+e.globalData.tituloUnidad)}}),n("h2",{staticClass:"mb-0 text-uppercase",domProps:{innerHTML:e._s(e.subTitulo)}})])])])},r=[],s={name:"BannerInterno",props:{titulo:{type:String,default:""},subTitulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},a=s,o=(n("8385"),n("2877")),c=Object(o["a"])(a,i,r,!1,null,null,null);t["default"]=c.exports},"450b":function(e,t,n){},"52e5":function(e,t,n){e.exports=n.p+"img/cc.58a75e32.svg"},"60c7":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"curso-main-container creditos-vista"},[n("BannerInterno",{attrs:{subTitulo:"SÍNTESIS"}}),e._m(0)],1)},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[i("p",{staticClass:"mb-4 mb-md-5"},[e._v("La investigación científica impulsa el conocimiento mediante la aplicación rigurosa del método científico, que incluye la observación, formulación de hipótesis, recolección y análisis de datos, y verificación para generar teorías válidas. Sus enfoques principales son cualitativo, cuantitativo y mixto, seleccionados según el problema y los objetivos del estudio. Este proceso, esencial en todas las disciplinas, debe seguir principios éticos que garanticen integridad y transparencia. A través de métodos estructurados y responsables, la investigación científica permite resolver problemas complejos y desarrollar teorías sólidas.")]),i("figure",[i("img",{attrs:{src:n("30b2"),alt:"Texto que describa la imagen"}})])])}],s=(n("d3b7"),n("159b"),n("3cd8")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"container footer tarjeta p-3 px-sm-5 py-sm-4",class:[e.allRound&&"footer__all-round"]},[n("div",{staticClass:"row align-items-center justify-content-center"},[e._m(0),n("div",{staticClass:"col-12 col-sm"},[n("p",{staticClass:"mb-2 text-small"},[e._v("Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que el trabajo original.")]),n("p",{staticClass:"mb-0 text-small"},[e._v(" Base v"+e._s(e.versiones.base)+" - Paquete v"+e._s(e.versiones.pkg))])])])])},o=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"col-auto mb-2 mb-sm-0"},[i("img",{attrs:{src:n("52e5")}})])}],c={name:"Footer",props:{allRound:{type:Boolean,default:!1}},computed:{versiones:function(){return{base:this.$package.version,pkg:this.$package.dependencies["ecored-base-pkg"]}}}},l=c,u=(n("13f0"),n("2877")),d=Object(u["a"])(l,a,o,!1,null,null,null),f=d.exports,p={name:"Creditos",components:{BannerInterno:s["default"],Footer:f},data:function(){return{configTitulos:{liderEquipo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",contenidoInstruccional:"CONTENIDO INSTRUCCIONAL",desarrolloProducto:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",gestoresRepositorio:"GESTORES DE REPOSITORIO"}}},computed:{creditosData:function(){return this.$config.creditos},creditosAdicionales:function(){return this.$config.creditosAdicionales}},methods:{renderText:function(e){var t="";return Array.isArray(e)?e.forEach((function(e,n){t+=(n?"<br/>":"")+e})):t+=e,t}}},b=p,m=(n("3079"),Object(u["a"])(b,i,r,!1,null,null,null));t["default"]=m.exports},"65f0":function(e,t,n){var i=n("861d"),r=n("e8b5"),s=n("b622"),a=s("species");e.exports=function(e,t){var n;return r(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?i(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},8385:function(e,t,n){"use strict";n("d36b")},a640:function(e,t,n){"use strict";var i=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&i((function(){n.call(null,t||function(){throw 1},1)}))}},b727:function(e,t,n){var i=n("0366"),r=n("44ad"),s=n("7b0b"),a=n("50c4"),o=n("65f0"),c=[].push,l=function(e){var t=1==e,n=2==e,l=3==e,u=4==e,d=6==e,f=7==e,p=5==e||d;return function(b,m,v,g){for(var E,h,y=s(b),_=r(y),C=i(m,v,3),S=a(_.length),x=0,I=g||o,O=t?I(b,S):n||f?I(b,0):void 0;S>x;x++)if((p||x in _)&&(E=_[x],h=C(E,x,y),e))if(t)O[x]=h;else if(h)switch(e){case 3:return!0;case 5:return E;case 6:return x;case 2:c.call(O,E)}else switch(e){case 4:return!1;case 7:c.call(O,E)}return d?-1:l||u?u:O}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},d36b:function(e,t,n){},e8b5:function(e,t,n){var i=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==i(e)}}}]);
//# sourceMappingURL=sintesis.cce7d3e5.js.map