(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{"./src/components/VContentPage.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.16/node_modules/vue/dist/vue.js"),constants_window=__webpack_require__("./src/constants/window.ts"),components_VContentPagevue_type_script_lang_ts=Object(vue.defineComponent)({name:"VContentPage",setup:function setup(){return{skipToContentTargetId:constants_window.b}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.11.1_@vue+compiler-sfc@3.3.4_babel-core@7.0.0-bridge.0_@babel+core@7.24.4__css-_kpa2jm6q5lntp7j2v7yhhjk7he/node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)(components_VContentPagevue_type_script_lang_ts,(function render(){var _c=this._self._c;this._self._setupProxy;return _c("main",{staticClass:"flex-grow pt-5 md:pt-10",attrs:{id:this.skipToContentTargetId,tabindex:"-1",dir:"ltr"}},[_c("div",{staticClass:"prose-h1:text-bold prose prose-sm mx-auto mb-10 max-w-none px-6 md:prose-base prose-headings:font-bold prose-h1:text-4xl prose-h2:text-2xl prose-h2:font-semibold prose-h3:text-2xl prose-h3:font-semibold md:max-w-4xl md:prose-h1:mb-10 md:prose-h2:mt-10 md:prose-h3:mt-10 lg:mb-30 lg:px-0 lg:prose-headings:text-3xl lg:prose-h1:text-6xl xl:max-w-5xl"},[this._t("default",null,{default:""})],2)])}),[],!1,null,null,null).exports;__webpack_exports__.a=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"VContentPage",exportName:"default",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[{name:"default",title:"binding"}]}]}},"./src/pages/search-help.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../node_modules/.pnpm/core-js@3.36.1/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.36.1/node_modules/core-js/modules/es.regexp.to-string.js");var runtime=__webpack_require__("../node_modules/.pnpm/@nuxtjs+composition-api@0.34.0_nuxt@2.17.3_@vue+compiler-sfc@3.3.4_acorn@8.11.3_babel-core@7._jr23wub4b6gdovp3dxzpowsa2e/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),search=__webpack_require__("./src/stores/search.ts"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),VLink=__webpack_require__("./src/components/VLink.vue"),VContentPage=__webpack_require__("./src/components/VContentPage.vue"),pages_search_helpvue_type_script_lang_ts=Object(runtime.b)({name:"VSearchHelpPage",components:{VLink:VLink.a,VContentPage:VContentPage.a},layout:"content-layout",setup:function setup(){var i18n=Object(use_i18n.a)(),searchStore=Object(search.b)();Object(runtime.k)({title:"".concat(i18n.t("searchGuide.title",{openverse:"Openverse"})," | Openverse"),meta:[{hid:"robots",name:"robots",content:"all"}]});return{pathFromQuery:function pathFromQuery(queryString){return searchStore.getSearchPath({query:{q:queryString}})}}},head:{}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.11.1_@vue+compiler-sfc@3.3.4_babel-core@7.0.0-bridge.0_@babel+core@7.24.4__css-_kpa2jm6q5lntp7j2v7yhhjk7he/node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)(pages_search_helpvue_type_script_lang_ts,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("VContentPage",[_c("h1",[_vm._v(_vm._s(_vm.$t("searchGuide.title",{openverse:"Openverse"})))]),_vm._v(" "),_c("p",[_vm._v(_vm._s(_vm.$t("searchGuide.intro")))]),_vm._v(" "),_c("h2",[_vm._v(_vm._s(_vm.$t("searchGuide.exact.title")))]),_vm._v(" "),_c("i18n",{attrs:{path:"searchGuide.exact.content",tag:"p"},scopedSlots:_vm._u([{key:"link",fn:function fn(){return[_c("VLink",{attrs:{"aria-label":_vm.$t("searchGuide.exact.ariaLabel"),href:_vm.pathFromQuery('"Claude Monet"')}},[_c("em",[_vm._v(_vm._s(_vm.$t("searchGuide.exact.claudeMonet")))])])]},proxy:!0}])}),_vm._v(" "),_c("h2",[_vm._v(_vm._s(_vm.$t("searchGuide.negate.title")))]),_vm._v(" "),_c("i18n",{staticClass:"mb-4",attrs:{path:"searchGuide.negate.content",tag:"p"},scopedSlots:_vm._u([{key:"operator",fn:function fn(){return[_c("em",{attrs:{role:"text"}},[_vm._v("- "+_vm._s(_vm.$t("searchGuide.negate.operatorName").toString()))])]},proxy:!0},{key:"link",fn:function fn(){return[_c("VLink",{attrs:{href:_vm.pathFromQuery("dog -pug")}},[_c("em",{attrs:{"aria-hidden":"true"}},[_vm._v(_vm._s(_vm.$t("searchGuide.negate.example")))]),_vm._v(" "),_c("span",{staticClass:"sr-only"},[_vm._v(_vm._s(_vm.$t("searchGuide.negate.ariaLabel")))])])]},proxy:!0},{key:"br",fn:function fn(){return[_c("br")]},proxy:!0}])})],1)}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"VSearchHelpPage",exportName:"default",description:"",tags:{}}}}]);