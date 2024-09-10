(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"./src/components/VSearchResultsGrid/VCollectionResults.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.16/node_modules/vue/dist/vue.js"),media=__webpack_require__("./src/constants/media.ts"),emits=__webpack_require__("./src/types/emits.ts"),VCollectionHeader=__webpack_require__("./src/components/VCollectionHeader/VCollectionHeader.vue"),VMediaCollection=__webpack_require__("./src/components/VSearchResultsGrid/VMediaCollection.vue"),VLoadMore=__webpack_require__("./src/components/VLoadMore.vue"),VSearchResultsGrid_VCollectionResultsvue_type_script_lang_ts=Object(vue.defineComponent)({name:"VCollectionResults",components:{VLoadMore:VLoadMore.a,VMediaCollection:VMediaCollection.a,VCollectionHeader:VCollectionHeader.a},props:{collectionParams:{type:Object,required:!0},collectionLabel:{type:String,required:!0},results:{type:Object,required:!0},isFetching:{type:Boolean,required:!0},searchTerm:{type:String,required:!0}},emits:{"load-more":Object(emits.a)()},methods:{isSupportedMediaType:media.j}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.11.1_@vue+compiler-sfc@3.3.4_babel-core@7.0.0-bridge.0_@babel+core@7.24.4__css-_dib6obwdv3d62wiszs4gascedq/node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)(VSearchResultsGrid_VCollectionResultsvue_type_script_lang_ts,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("VMediaCollection",{attrs:{results:_vm.results,"is-fetching":_vm.isFetching,"search-term":_vm.searchTerm,"collection-label":_vm.collectionLabel,kind:"collection"},scopedSlots:_vm._u([{key:"header",fn:function fn(){return[_vm.isSupportedMediaType(_vm.results.type)?_c("VCollectionHeader",{staticClass:"mb-2 md:mb-3",attrs:{"media-type":_vm.results.type,"collection-params":_vm.collectionParams}}):_vm._e()]},proxy:!0},{key:"footer",fn:function fn(){return[_c("footer",{staticClass:"mb-6 mt-4 lg:mb-10"},[_c("VLoadMore",{staticClass:"mb-4",attrs:{"search-type":_vm.results.type,kind:"collection","search-term":_vm.searchTerm,"is-fetching":_vm.isFetching},on:{"load-more":function loadMore($event){return _vm.$emit("load-more")}}})],1)]},proxy:!0}])})}),[],!1,null,null,null).exports;__webpack_exports__.a=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"VCollectionResults",exportName:"default",description:"",tags:{},props:[{name:"collectionParams",type:{name:"CollectionParams"},required:!0},{name:"collectionLabel",type:{name:"string"},required:!0},{name:"results",type:{name:"Results"},required:!0},{name:"isFetching",type:{name:"boolean"},required:!0},{name:"searchTerm",type:{name:"string"},required:!0}],events:[{name:"load-more"}]}},"./src/composables/use-collection-meta.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useCollectionMeta}));var vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/vue@2.7.16/node_modules/vue/dist/vue.js"),_stores_provider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stores/provider.ts"),useCollectionMeta=function useCollectionMeta(_ref){var collectionParams=_ref.collectionParams,mediaType=_ref.mediaType,i18n=_ref.i18n;return{pageTitle:Object(vue__WEBPACK_IMPORTED_MODULE_0__.computed)((function(){var params=collectionParams.value;if(params){if("creator"===params.collection)return"".concat(params.creator," | Openverse");if("source"===params.collection){var sourceName=Object(_stores_provider__WEBPACK_IMPORTED_MODULE_1__.a)().getProviderName(params.source,mediaType);return"".concat(i18n.t("collection.pageTitle.source.".concat(mediaType),{source:sourceName})," | Openverse")}if("tag"===params.collection)return"".concat(i18n.t("collection.pageTitle.tag.".concat(mediaType),{tag:params.tag})," | Openverse")}return"Openly Licensed Images, Audio and More | Openverse"}))}}},"./src/pages/image/collection.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var asyncToGenerator=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),defineProperty=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),dist_runtime=(__webpack_require__("../node_modules/.pnpm/regenerator-runtime@0.13.11/node_modules/regenerator-runtime/runtime.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.36.1/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.36.1/node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.36.1/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.36.1/node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.36.1/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.36.1/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.36.1/node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.36.1/node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../node_modules/.pnpm/@nuxtjs+composition-api@0.34.0_nuxt@2.17.3_@vue+compiler-sfc@3.3.4_acorn@8.11.3_babel-core@7._cf4v2tncnlhy2kiyx2jjtoxaqm/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs")),vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.16/node_modules/vue/dist/vue.js"),middleware_collection=__webpack_require__("./src/middleware/collection.ts"),stores_media=__webpack_require__("./src/stores/media/index.ts"),search=__webpack_require__("./src/stores/search.ts"),use_collection_meta=__webpack_require__("./src/composables/use-collection-meta.ts"),constants_window=__webpack_require__("./src/constants/window.ts"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),VCollectionResults=__webpack_require__("./src/components/VSearchResultsGrid/VCollectionResults.vue"),_excluded=["collection"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var collectionvue_type_script_lang_ts=Object(dist_runtime.b)({name:"VImageCollectionPage",components:{VCollectionResults:VCollectionResults.a},layout:"content-layout",middleware:middleware_collection.collectionMiddleware,setup:function setup(){var mediaStore=Object(stores_media.a)(),searchStore=Object(search.b)(),collectionParams=Object(vue.computed)((function(){return searchStore.collectionParams})),isFetching=Object(vue.computed)((function(){return mediaStore.fetchState.isFetching})),media=Object(vue.ref)([]),creatorUrl=Object(vue.ref)(),i18n=Object(use_i18n.a)(),collectionLabel=Object(vue.computed)((function(){if(!collectionParams.value)return"";var _collectionParams$val=collectionParams.value,collection=_collectionParams$val.collection,params=Object(objectWithoutProperties.a)(_collectionParams$val,_excluded);return i18n.t("collection.ariaLabel.".concat(collection,".image"),function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){Object(defineProperty.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},params)).toString()})),fetchMedia=function(){var _ref=Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee(){var _ref2,shouldPersistMedia,_args=arguments;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _ref2=_args.length>0&&void 0!==_args[0]?_args[0]:{shouldPersistMedia:!1},shouldPersistMedia=_ref2.shouldPersistMedia,_context.next=3,mediaStore.fetchMedia({shouldPersistMedia:shouldPersistMedia});case 3:media.value=_context.sent,creatorUrl.value=media.value.length>0?media.value[0].creator_url:void 0;case 5:case"end":return _context.stop()}}),_callee)})));return function fetchMedia(){return _ref.apply(this,arguments)}}(),pageTitle=Object(use_collection_meta.a)({collectionParams:collectionParams,mediaType:"image",i18n:i18n}).pageTitle;Object(dist_runtime.k)((function(){return{meta:[{hid:"robots",name:"robots",content:"all"},{hid:"og:title",property:"og:title",content:pageTitle.value}],title:pageTitle.value}})),Object(dist_runtime.j)(Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee2(){return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.next=2,fetchMedia();case 2:case"end":return _context2.stop()}}),_callee2)}))));var route=Object(dist_runtime.l)();return Object(vue.watch)(route,(function(){fetchMedia()})),{collectionParams:collectionParams,isFetching:isFetching,creatorUrl:creatorUrl,collectionLabel:collectionLabel,loadMore:function loadMore(){fetchMedia({shouldPersistMedia:!0})},media:media,skipToContentTargetId:constants_window.b}},head:{}}),image_collectionvue_type_script_lang_ts=collectionvue_type_script_lang_ts,componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.11.1_@vue+compiler-sfc@3.3.4_babel-core@7.0.0-bridge.0_@babel+core@7.24.4__css-_dib6obwdv3d62wiszs4gascedq/node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)(image_collectionvue_type_script_lang_ts,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("div",{staticClass:"p-6 pt-0 lg:p-10 lg:pt-2",attrs:{id:_vm.skipToContentTargetId,tabindex:"-1"}},[_vm.collectionParams?_c("VCollectionResults",{attrs:{"search-term":"","is-fetching":_vm.isFetching,results:{type:"image",items:_vm.media},"collection-label":_vm.collectionLabel,"collection-params":_vm.collectionParams},on:{"load-more":_vm.loadMore}}):_vm._e()],1)}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"VImageCollectionPage",exportName:"default",description:"",tags:{}}}}]);