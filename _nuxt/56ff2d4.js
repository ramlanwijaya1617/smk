(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{261:function(t,e,l){var content=l(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(105).default)("64728ffa",content,!0,{sourceMap:!1})},271:function(t,e,l){t.exports=l.p+"img/slider1.0caa175.svg"},272:function(t,e,l){t.exports=l.p+"img/slider2.61d07b9.svg"},273:function(t,e,l){t.exports=l.p+"img/slider3.4b6dca2.svg"},274:function(t,e,l){t.exports=l.p+"img/slider4.3b6b06b.svg"},275:function(t,e,l){t.exports=l.p+"img/slider5.4123502.svg"},276:function(t,e,l){"use strict";l(261)},277:function(t,e,l){var n=l(104)((function(i){return i[1]}));n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap);"]),n.push([t.i,"@import url(https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css);"]),n.push([t.i,".slider[data-v-d6e914aa]{width:100%;position:relative}.slide-ana[data-v-d6e914aa]{height:100px}.slide-ana>div[data-v-d6e914aa]{width:100%;height:100%;position:absolute;transition:all 5s}@media (min-width:300px) and (max-width:884px){.slider[data-v-d6e914aa]{height:160px}}@media (min-width:768px) and (max-width:1023px){.slider[data-v-d6e914aa]{height:130px}}@media (min-width:1024px) and (max-width:1280px){.slider[data-v-d6e914aa]{height:100px}}.slider2[data-v-d6e914aa]{width:100%;height:100px;position:relative;overflow:hidden}.slide-ana2[data-v-d6e914aa]{height:100%}.slide-ana2>div[data-v-d6e914aa]{width:100%;height:100%;position:absolute;transition:all 1s}@media (min-width:300px) and (max-width:1023px){.slider2[data-v-d6e914aa]{height:378px}}",""]),n.locals={},t.exports=n},289:function(t,e,l){"use strict";l.r(e);var n=l(287),o=l.n(n),r=(l(288),{name:"MyComponent",components:{VueSlickCarousel:o.a},data:function(){return{settings:{dots:!1,infinite:!0,arrows:!1,speed:500,slidesToShow:0,slidesToScroll:1,touchThreshold:5},windowWidth:window.innerWidth}},methods:{showNext:function(){this.$refs.carousel.next()},showPrev:function(){this.$refs.carousel.prev()}},mounted:function(){this.windowWidth>1339||this.windowWidth>1079?this.settings.slidesToShow=4:this.windowWidth>767?this.settings.slidesToShow=2:this.settings.slidesToShow=1}}),d=(l(276),l(42)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto relative"},[n("div",{staticClass:"flex items-center justify-between absolute inset-0 w-full"},[n("button",{staticClass:" z-30  ml-20 bg-[#32B9B9]",attrs:{role:"button","aria-label":"slide forward",id:"next"},on:{click:t.showPrev}},[n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white","stroke-width":"2"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 19l-7-7 7-7"}})])]),t._v(" "),n("button",{staticClass:" z-30  mr-20 bg-[#32B9B9]",attrs:{role:"button","aria-label":"slide forward",id:"next"},on:{click:t.showNext}},[n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"white","stroke-width":"2"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 5l7 7-7 7"}})])])]),t._v(" "),n("div",{staticClass:"flex items-center justify-center w-full h-full py-10"},[n("div",{staticClass:"slider"},[n("div",{staticClass:"slide-ana"},[n("VueSlickCarousel",t._b({ref:"carousel"},"VueSlickCarousel",t.settings,!1),[n("div",{staticClass:"px-3"},[n("div",{staticClass:"flex flex-nowrap-0 relative w-full sm:w-auto"},[n("img",{staticClass:"object-cover object-center w-full rounded-2xl",attrs:{src:l(271),alt:"black chair and white table"}}),t._v(" "),n("div",{staticClass:"absolute w-full h-full p-6"},[n("p",{staticClass:"text-base leading-4 lg:leading-5 text-white hover:text-[#67f5f5]"},[t._v("\n                                    Pengawasan Mutu\n                                    Hasil Pertanian / Agriteknologi Pertanian")])])])]),t._v(" "),n("div",{staticClass:"px-3"},[n("div",{staticClass:"flex flex-nowrap-0 relative w-full sm:w-auto"},[n("img",{staticClass:"object-cover object-center w-full rounded-2xl",attrs:{src:l(272),alt:"sitting area"}}),t._v(" "),n("div",{staticClass:"absolute w-full h-full p-6"},[n("p",{staticClass:"text-base leading-4 lg:leading-5 text-white hover:text-[#67f5f5]"},[t._v("\n                                    Agribisnis\n                                    Pengolahan Hasil Pertanian / Agriteknologi Pertanian")])])])]),t._v(" "),n("div",{staticClass:"px-3"},[n("div",{staticClass:"flex flex-nowrap-0 relative w-full sm:w-auto"},[n("img",{staticClass:"object-cover object-center w-full rounded-2xl",attrs:{src:l(273),alt:"sitting area"}}),t._v(" "),n("div",{staticClass:"absolute w-full h-full p-6"},[n("p",{staticClass:"text-base leading-4 lg:leading-5 text-white hover:text-[#67f5f5]"},[t._v("\n                                    Agribisnis\n                                    Tanaman Pangan dan Holtikultura / Agribisnis Pertanian")])])])]),t._v(" "),n("div",{staticClass:"px-3"},[n("div",{staticClass:"flex flex-nowrap-0 relative w-full sm:w-auto"},[n("img",{staticClass:"object-cover object-center w-full rounded-2xl",attrs:{src:l(274),alt:"sitting area"}}),t._v(" "),n("div",{staticClass:"absolute w-full h-full p-6"},[n("p",{staticClass:"text-base leading-4 lg:leading-5 text-white hover:text-[#67f5f5]"},[t._v("\n                                    Agribisnis Ternak\n                                    Ruminansia / Agribisnis Ternak")])])])]),t._v(" "),n("div",{staticClass:"px-3"},[n("div",{staticClass:"flex flex-nowrap-0 relative w-full sm:w-auto"},[n("img",{staticClass:"object-cover object-center w-full rounded-2xl",attrs:{src:l(275),alt:"sitting area"}}),t._v(" "),n("div",{staticClass:"absolute w-full h-full p-6"},[n("p",{staticClass:"text-base leading-4 lg:leading-6 text-white hover:text-[#67f5f5]"},[t._v("\n                                    Agribisnis Ternak\n                                    Unggas / Agribisnis Ternak")])])])])])],1)])])])}),[],!1,null,"d6e914aa",null);e.default=component.exports}}]);