(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))}},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"5fIB":function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},"8Eqz":function(e,t,n){e.exports={wrapper:"Header_wrapper__gYMQv",scrolled:"Header_scrolled__vZ2b9",collapsibleNav:"Header_collapsibleNav__BnYLG",ycLogo:"Header_ycLogo__3GV0r",menuOpen:"Header_menuOpen__3dPQW",menuButton:"Header_menuButton__3a5cv"}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=r(n("Xuae")),i=n("lwAK"),c=n("FYa8"),l=n("/0+H");function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=s;var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,l=d.length;c<l;c++){var s=d[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var u=o.props[s],f=r[s]||new Set;f.has(u)?a=!1:(f.add(u),r[s]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var p=a.default();function m(e){var t=e.children;return o.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(p,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:l.isInAmpMode(e)},t)}))}))}m.rewind=p.rewind,t.default=m},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("IlR1")}])},IlR1:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),i=n.n(a),c=o.a.createElement,l=function(){return c(i.a,null,c("link",{rel:"icon",href:"%PUBLIC_URL%/favicon.ico"}),c("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),c("meta",{name:"theme-color",content:"#1A3663"}),c("meta",{name:"description",content:"Esports at Yeovil College - a microsite experience by students."}),c("link",{href:"https://fonts.googleapis.com/css?family=Fugaz+One|Nunito:400,700|Roboto:400,700&display=swap",rel:"stylesheet"}),c("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),c("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css",integrity:"sha256-gvEnj2axkqIj4wbYhPjbWV7zttgpzBVEgHub9AAZQD4=",crossOrigin:"anonymous"}),c("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"}),c("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"}),c("link",{rel:"apple-touch-icon",href:"%PUBLIC_URL%/logo192.png"}),c("link",{rel:"manifest",href:"%PUBLIC_URL%/manifest.json"}),c("title",null,"Esports at Yeovil College"))},s=n("oqc9"),u=n("8Eqz"),d=n.n(u),f=o.a.createElement;function p(e){var t=e.children;return f("li",{className:d.a.navLink},f(s.Link,{to:e.to,spy:!0,smooth:!0,offset:-120,duration:600,activeClass:d.a.NavLinkInnerActive,onClick:e.onClick},t))}function m(e){return f("nav",{className:d.a.collapsibleNav},e.children)}function h(e){var t=Object(r.useState)(!1),n=t[0],o=t[1];function a(e){n&&(document.getElementById("header").classList.remove(d.a.menuOpen),o(!1))}return Object(r.useEffect)((function(){function e(e){window.scrollY>64?document.getElementById("header").classList.add(d.a.scrolled):document.getElementById("header").classList.remove(d.a.scrolled)}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),f("header",{className:d.a.wrapper,id:"header"},f("a",{href:"https://yeovil.ac.uk/",rel:"noopener noreferrer",target:"_blank"},f("div",{className:d.a.ycLogo})),f("div",{className:d.a.menuButton,onClick:function(e){n?(document.getElementById("header").classList.remove(d.a.menuOpen),o(!1)):(document.getElementById("header").classList.add(d.a.menuOpen),o(!0))}},f("div",{id:"bar1"}),f("div",{id:"bar2"}),f("div",{id:"bar3"})),f(m,null,f("ul",null,f(p,{to:"section-home",onClick:a},"Home"),f(p,{to:"section-course",onClick:a},"Course"),f(p,{to:"section-subject",onClick:a},"Subject"),f(p,{to:"section-deck",onClick:a},"The Deck"),f(p,{to:"section-college",onClick:a},"The College"),f(p,{to:"section-enrol",onClick:a},"Enrol"))))}var v=n("S5Rk"),y=n.n(v),_=o.a.createElement;function k(e){return _("li",{className:y.a.navLink},_("a",{className:"",href:e.to,rel:"noopener noreferrer",target:"_blank"},e.children))}function g(){return _("footer",{className:y.a.footer},_("div",{className:y.a.linkWrapper},_("a",{href:"https://yeovil.ac.uk/",rel:"noopener noreferrer",target:"_blank"},_("div",{className:y.a.ycLogo})),_("ul",null,_(k,{to:"https://yeovil.ac.uk/"},"Home"),_(k,{to:"https://yeovil.ac.uk/our-courses"},"Courses"),_(k,{to:"https://yeovil.ac.uk/student-life"},"Student Life"),_(k,{to:"https://yeovil.ac.uk/events"},"Events"),_(k,{to:"https://yeovil.ac.uk/contact"},"Contact Us")),_("div",{className:y.a.ofstedBadge})),_("div",{className:y.a.copyright},"Design and development by ",_("a",{className:"inlineLink",href:"http://github.com/sam-cross",target:"_blank",rel:"noopener noreferrer"},"Sam Cross")," - \xa9 2020"))}n("a6qw"),n("NX+1"),n("vQl7");var w=o.a.createElement;function b(e){var t=e.Component,n=e.pageProps;return w(o.a.Fragment,null,w(l,null),w(h,null),w(t,n),w(g,null))}},"NX+1":function(e,t,n){},S5Rk:function(e,t,n){e.exports={footer:"Footer_footer__cAlbN",linkWrapper:"Footer_linkWrapper__38wDp",copyright:"Footer_copyright__1T-9L",ycLogo:"Footer_ycLogo__20QcA",ofstedBadge:"Footer_ofstedBadge__1uAfv"}},Xuae:function(e,t,n){"use strict";var r=n("/GRZ"),o=n("qXWd"),a=n("i2R6"),i=n("48fX"),c=n("tCBg"),l=n("T0f4"),s=n("mPvQ");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var d=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(s(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(s){i(m,s);var d,p=(d=m,function(){var e,t=l(d);if(u()){var n=l(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return c(this,e)});function m(e){var a;return r(this,m),a=p.call(this,e),f&&(t.add(o(a)),n(o(a))),a}return a(m,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(m,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),m}(d.Component)}},a6qw:function(e,t,n){},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("kG2m");e.exports=function(e){return r(e)||o(e)||a()}},rlHP:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},vQl7:function(e,t,n){}},[[0,0,1,3,2]]]);