(function(e){function t(t){for(var o,n,i=t[0],c=t[1],l=t[2],d=0,u=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);m&&m(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],o=!0,n=1;n<a.length;n++){var i=a[n];0!==r[i]&&(o=!1)}o&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var o={},n={app:0},r={app:0},s=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d05cf8b7","chunk-2c509f2e":"c5cbba3f","chunk-32144baf":"2d28dbbd","chunk-dcd2c3d0":"61995d51"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={about:1,"chunk-2c509f2e":1,"chunk-32144baf":1,"chunk-dcd2c3d0":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"e3a6bce8","chunk-2c509f2e":"4c558abc","chunk-32144baf":"fc351df4","chunk-dcd2c3d0":"8d74aae2"}[e]+".css",r=c.p+o,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===r))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){l=u[i],d=l.getAttribute("data-href");if(d===o||d===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete n[e],m.parentNode.removeChild(m),a(s)},m.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(m)})).then((function(){n[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var s=new Promise((function(t,a){o=r[e]=[t,a]}));t.push(o[2]=s);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(m);var a=r[e];if(0!==a){if(a){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",u.name="ChunkLoadError",u.type=o,u.request=n,a[1](u)}r[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(a,o,function(t){return e[t]}.bind(null,o));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var m=d;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var o=a("85ec"),n=a.n(o);n.a},"06dd":function(e,t,a){e.exports=a.p+"img/utadeo.e44a79cc.png"},"0c13":function(e,t,a){e.exports=a.p+"img/unal.f4db33d5.png"},"3f61":function(e,t,a){e.exports=a.p+"img/bogota.a2811acc.jpg"},"564c":function(e,t,a){e.exports=a.p+"img/observatorio.d226d49a.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0cdd");var o=a("2b0e"),n=a("5f5b"),r=a("b1e0");a("ab8b"),a("2dd8");o["default"].use(n["a"]),o["default"].use(r["a"]);var s=a("bc3a"),i=a.n(s),c=a("a7fe"),l=a.n(c);o["default"].use(l.a,i.a);var d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"h-100",attrs:{id:"app"}},[o("div",[o("b-navbar",{staticClass:"bar-color",attrs:{toggleable:"lg"}},[o("b-navbar-brand",{staticClass:"font-style",attrs:{href:"#",to:"/metaurbog"}},[e._v("Metabolismo Urbano Bogotá D.C.")]),o("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),o("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e.desktopClient?e._e():o("b-navbar-nav",{staticClass:"ml-auto"},[o("b-nav-item",{staticClass:"font-style",attrs:{href:"#",to:"/metaurbog"}},[e._v("Inicio")]),o("b-nav-item",{attrs:{href:"#",to:"/metaurbog/red-integrantes"}},[e._v("Integrantes Proyecto")]),o("b-nav-item-dropdown",{staticClass:"drop-text",attrs:{text:"Publicaciones",right:""}},[o("b-dropdown-item",{attrs:{href:"#",to:"/metaurbog/ponencias"}},[e._v("Artículos")])],1),o("b-nav-item-dropdown",{attrs:{text:"Eventos",right:""}},[o("b-dropdown-item",{attrs:{href:"#",to:"/metaurbog/ponencias"}},[e._v("Conferencias/Simposios/Congresos")]),o("b-dropdown-item",{attrs:{href:"#",to:"/metaurbog/seminarios"}},[e._v("Seminarios")])],1),e.logged?o("b-nav-item-dropdown",{attrs:{text:"Modelos",right:""}},[o("b-dropdown-item",{attrs:{href:"#",to:"/metaurbog/modelos/solar"}},[e._v("Electricidad")]),o("b-dropdown-item",{attrs:{href:"#",to:"/metaurbog/modelos/transporte"}},[e._v("Transporte")]),o("b-dropdown-item",{attrs:{href:"#",to:"/metaurbog/modelos/estupefacientes"}},[e._v("Estupefacientes")])],1):e._e()],1)],1)],1)],1),o("router-view"),o("b-container",{attrs:{fluid:""}},[o("b-row",{staticClass:"text-center",staticStyle:{"background-color":"#D9D9D9"}},[o("b-col",[o("b-link",{attrs:{href:"https://minciencias.gov.co/",target:"_blank"}},[o("b-img",{attrs:{center:"",src:a("7988"),fluid:"",alt:"Responsive image"}})],1)],1),o("b-col",[o("b-link",{attrs:{href:"https://www.manizales.unal.edu.co/",target:"_blank"}},[o("b-img",{attrs:{center:"",src:a("0c13"),fluid:"",alt:"Responsive image"}})],1)],1),o("b-col",[o("b-link",{attrs:{href:"https://www.utadeo.edu.co/",target:"_blank"}},[o("b-img",{attrs:{center:"",src:a("06dd"),fluid:"",alt:"Responsive image"}})],1)],1),o("b-col",[o("b-link",{attrs:{href:"https://www.ocyt.org.co/",target:"_blank"}},[o("b-img",{attrs:{center:"",src:a("564c"),fluid:"",alt:"Responsive image"}})],1)],1)],1),o("b-row",{staticStyle:{"background-color":"#048ABF",color:"white"}},[o("b-col",[o("p",{staticClass:"text-center"},[e._v("2020 Todos los derechos reservados")])])],1)],1)],1)},u=[],m=(a("034f"),a("2877")),b={},p=Object(m["a"])(b,d,u,!1,null,null,null),f=p.exports,g=(a("b0c0"),a("d3b7"),a("8c4f")),h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-container",{attrs:{fluid:""}},[o("b-row",[o("b-col",[o("b-img",{attrs:{src:a("3f61"),fluid:"",alt:"Responsive image"}})],1)],1),o("section",{staticClass:"inicio"},[o("b-row",{staticClass:"text-center",attrs:{md:"10","offset-md":"1","align-h":"center"}},[o("b-col",{staticClass:"p-3"},[o("h2",[e._v("Resumen del proyecto")])])],1),o("b-row",[o("b-col",{attrs:{md:"10","offset-md":"1"}},[o("h4",[e._v(" Proyecto parcialmente financiado por Minciencias, a través del proyecto 'Modelado y simulación del metabolismo urbano de la ciudad de Bogotá D.C.' Código: 111974558276, Contrato 022-2017 ")]),o("p",{attrs:{id:"resumen"}},[e._v("A lo largo del avance de este proyecto titulado Modelado y simulación del Metabolismo Urbano de Bogotá D.C. se han obtenido buenos resultados sobre la influencia del sector energético y del sector de transporte respecto al metabolismo de una ciudad como Bogotá. También hay avances en cuanto al tema de calidad de vida y salud, y a la distribución de sustancias ilegales que derivan también en temas socioeconómicos. En cuanto a lo energético, se ha analizado el proceso de adopción de tecnología solar fotovoltaica por parte de los sectores residencial, comercial, industrial e institucional. Con las curvas de resultados obtenidas, fue posible calcular distintas evoluciones de capacidad instalada para los distintos sectores, desde el año 2016 hasta el año 2050. Dichas curvas también permitieron saber cómo dicho proceso podría favorecer la reducción de emisiones de gases de efecto invernadero y de pérdidas de electricidad por transporte y distribución, los cuales son indicadores importantes del metabolismo de una ciudad. En cuanto al transporte se han analizado cómo los diferentes medios (taxi, metro, Transmilenio, carro particular) pueden afectar las emisiones, la eficiencia y el tiempo de transporte de los usuarios entre su hogar y el lugar de trabajo.")])])],1)],1),e.logged||e.desktopClient?o("div",[o("section",{staticClass:"electricidad"},[o("b-row",{attrs:{md:"10","offset-md":"1"}},[o("b-container",[o("b-row",[o("b-col",{attrs:{sm:"8"}},[o("h3",{attrs:{id:"title-elec"}},[e._v("Electricidad")]),o("p",{attrs:{id:"electricidad"}},[e._v("En cuanto a la energía, los estudios de metabolismo urbano examinan los principales tipos, que incluyen combustibles, electricidad, radiación y calor, aunque no se puede ignorar la energía almacenada que utiliza la construcción y la gestión de alimentos y residuos (Chrysoulakis et al., 2013). Con respecto al metabolismo urbano, los flujos de energía pueden contribuir a comprender cómo las zonas rurales y urbanas los utilizan, y como administran su oferta y demanda de energía (Villarroel-Walker y Beck 2012). Para el caso específico de Bogotá, en cuanto a los indicadores del metabolismo urbano, este trabajo ha demostrado que la adopción de la tecnología fotovoltaica en la ciudad podría satisfacer incluso el 44% de la demanda de electricidad de los sectores estudiados y contribuir a una reducción de hasta 820,000 t de gases de efecto invernadero por año para el año 2050.")]),o("b-row",[o("div",{staticClass:"btn-elec"},[o("b-col",{attrs:{sm:"6"}},[o("b-button",{attrs:{id:"elec",target:"_blank",to:"system/Electricidad.zip"}},[e._v("Acceder a los archivos de simulación")])],1)],1)]),o("br")],1),o("b-col",{staticClass:"elec-img",attrs:{sm:"4"}},[o("b-img",{staticClass:"d-none d-sm-none d-md-block",attrs:{src:a("885f"),fluid:"",alt:"Responsive image"}})],1)],1)],1)],1)],1),o("section",{staticClass:"transporte"},[o("b-row",{attrs:{md:"10","offset-md":"1"}},[o("b-container",[o("b-row",[o("b-col",{staticClass:"trans-img",attrs:{sm:"4"}},[o("b-img",{staticClass:"d-none d-sm-none d-md-block",attrs:{src:a("9b1e"),fluid:"",alt:"Responsive image"}})],1),o("b-col",{attrs:{sm:"8"}},[o("h3",{attrs:{id:"title-transpor"}},[e._v("Transporte")]),o("p",{attrs:{id:"transporte"}},[e._v("Una cuestión fundamental es la relación entre el crecimiento poblacional, el desarrollo demográfico y la infraestructura del transporte público. En particular, la ciudad atraviesa un momento clave de decisión frente a posibilidad de incorporar el Metro como uno de sus principales sistemas de transporte, en contraposición con el sistema de transporte masivo actual Transmilenio, que funciona con base en buses articulados. Es latente la necesidad de responder bajo qué condiciones un sistema de transporte masivo puede invadir, expandirse en el mercado y coexistir, a largo plazo, con los sistemas de transporte ya establecidos en la ciudad. Este tipo de preguntas guarda estrecha relación con otras estudiadas desde la biología evolutiva y han permitido el desarrollo de las Dinámicas Adaptativas como un marco teórico matemático útil para estudiar estas cuestiones.")]),o("b-row",[o("div",{staticClass:"btn-transpo"},[o("b-col",{attrs:{sm:"6"}},[o("b-button",{attrs:{id:"transpo",target:"_blank",to:"system/Tranposte.zip"}},[e._v("Acceder a los archivos de simulación")])],1)],1)]),o("br")],1)],1)],1)],1)],1),o("section",{staticClass:"estupefacien"},[o("b-row",{staticClass:"p-3",attrs:{md:"10","offset-md":"1"}},[o("b-container",[o("b-row",[o("b-col",{attrs:{sm:"8"}},[o("h3",{attrs:{id:"title-estu"}},[e._v("Estupefacientes")]),o("p",{attrs:{id:"estupefacientes"}},[e._v("El cannabis es la sustancia ilícita más utilizada en el mundo, lo que motiva estudios alrededor de este tema en particular lo que tiene que ver con su distribución. Se ha considerado la ciudad de Bogotá como la región de interés y sus 112 UPZ (Unidades de Planeamiento Zonal) como los nodos de un grafo, para estudiar un tipo de grafo denominado de Umbral geográfico. En cada nodo se ha analizado la dinamica de consumo mediante la introduccion de un sistema de ecuaciones diferenciales ordinarias y fundamentos epidemiológicos. Los resultados obtenidos provienen de la articulación de la teoría de redes y el sistema de ecuaciones diferenciales, dando lugar al establecimiento zonas de influencia de lo que en el documento se denominó nodo distribuidor")]),o("b-row",[o("div",{staticClass:"btn-estup"},[o("b-col",{attrs:{sm:"6"}},[o("b-button",{attrs:{id:"estup",target:"_blank",to:"system/Estuperfacientes.zip"}},[e._v("Acceder a la simulación")])],1)],1)]),o("br")],1),o("b-col",{staticClass:"estupe-img",attrs:{sm:"4"}},[o("b-img",{staticClass:"d-none d-sm-none d-md-block",attrs:{src:a("e0e7"),fluid:"",alt:"Responsive image"}})],1)],1)],1)],1)],1)]):e._e()],1)},v=[],y={name:"Home",computed:{logged:function(){return this.$store.getters["auth/loggedIn"]},desktopClient:function(){return console.log("0"),"0"}}},w=y,k=(a("cccb"),Object(m["a"])(w,h,v,!1,null,null,null)),_=k.exports,C=a("2f62"),x={authenticating:!1,accessToken:localStorage.getItem("auth-token")},E={loggedIn:function(e){return!!e.accessToken},authenticating:function(e){return e.authenticating},authToken:function(e){return e.accessToken}},S={login:function(e,t){var a=e.commit,o=t.email,n=t.password;return a("loginRequest"),new Promise((function(e,t){i.a.post("/login",{email:o,password:n}).then((function(t){var o=t.data.token;localStorage.setItem("auth-token",o),a("loginSuccess",o),e(t)})).catch((function(e){localStorage.removeItem("auth-token"),t(e)}))}))},logout:function(e){var t=e.commit;localStorage.removeItem("auth-token"),t("logoutSuccess")}},T={loginRequest:function(e){e.authenticating=!0,e.authenticationError="",e.authenticationErrorCode=0},loginSuccess:function(e,t){e.accessToken=t,e.authenticating=!1},logoutSuccess:function(e){e.accessToken=""}},j={namespaced:!0,state:x,getters:E,actions:S,mutations:T},P=!1;o["default"].use(C["a"]);var q=new C["a"].Store({modules:{auth:j},strict:P});o["default"].use(g["a"]);var A=[{path:"/metaurbog",name:"Home",component:_},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/metaurbog/login",name:"Login",component:function(){return a.e("about").then(a.bind(null,"a55b"))}},{path:"/metaurbog/users",name:"Users",component:function(){return a.e("about").then(a.bind(null,"ed81"))}},{path:"/metaurbog/modelos/estupefacientes",name:"Drugs",component:function(){return a.e("about").then(a.bind(null,"c1fc"))}},{path:"/metaurbog/modelos/solar",name:"Solar",component:function(){return a.e("about").then(a.bind(null,"bb2b"))}},{path:"/metaurbog/modelos/transporte",name:"Transport",component:function(){return a.e("about").then(a.bind(null,"15ca"))}},{path:"/metaurbog/red-integrantes",component:function(){return a.e("chunk-dcd2c3d0").then(a.bind(null,"69dc"))}},{path:"/metaurbog/ponencias",component:function(){return a.e("chunk-32144baf").then(a.bind(null,"4810"))}},{path:"/metaurbog/seminarios",component:function(){return a.e("chunk-2c509f2e").then(a.bind(null,"b33f"))}}],O=new g["a"]({scrollBehavior:function(){return{x:0,y:0}},mode:"history",routes:A});O.beforeEach((function(e,t,a){a()}));var z=O;o["default"].config.productionTip=!1,o["default"].axios.defaults.baseURL="http://192.168.0.12/metaurbog",new o["default"]({store:q,router:z,render:function(e){return e(f)}}).$mount("#app")},"5ced":function(e,t,a){},7988:function(e,t,a){e.exports=a.p+"img/minciencias.199f307e.png"},"85ec":function(e,t,a){},"885f":function(e,t,a){e.exports=a.p+"img/electr_resident.ca495b0f.jpg"},"9b1e":function(e,t,a){e.exports=a.p+"img/transport.f47fdc6b.jpg"},cccb:function(e,t,a){"use strict";var o=a("5ced"),n=a.n(o);n.a},e0e7:function(e,t,a){e.exports=a.p+"img/estupe.30c14b38.jpg"}});
//# sourceMappingURL=app.cbfbbd49.js.map