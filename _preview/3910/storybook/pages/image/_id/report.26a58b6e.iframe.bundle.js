(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{"./src/pages/image/_id/report.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var asyncToGenerator=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),dist_runtime=(__webpack_require__("../node_modules/.pnpm/regenerator-runtime@0.13.11/node_modules/regenerator-runtime/runtime.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_@nuxt+vue-app@2.17.2_nuxt@2.17.2_vue@2.7.15/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs")),media=__webpack_require__("./src/constants/media.ts"),constants_window=__webpack_require__("./src/constants/window.ts"),single_result=__webpack_require__("./src/stores/media/single-result.ts"),attribution_html=__webpack_require__("./src/utils/attribution-html.ts"),VButton=__webpack_require__("./src/components/VButton.vue"),VContentReportForm=__webpack_require__("./src/components/VContentReport/VContentReportForm.vue"),_id_reportvue_type_script_lang_ts_=Object(dist_runtime.b)({name:"ReportImage",components:{VButton:VButton.default,VContentReportForm:VContentReportForm.default},layout:"content-layout",asyncData:function asyncData(_ref){return Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee(){var route,$pinia,i18n,nuxtError,singleResultStore,imageId,image,attributionMarkup;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return route=_ref.route,$pinia=_ref.$pinia,i18n=_ref.i18n,nuxtError=_ref.error,singleResultStore=Object(single_result.a)($pinia),imageId=route.params.id,_context.next=5,singleResultStore.fetch(media.d,imageId);case 5:if(image=_context.sent){_context.next=8;break}return _context.abrupt("return",nuxtError({statusCode:404,message:i18n.t("error.imageNotFound",{id:imageId}).toString()}));case 8:return attributionMarkup=Object(attribution_html.a)(image,i18n,{includeIcons:!1}),_context.abrupt("return",{attributionMarkup:attributionMarkup,image:image});case 10:case"end":return _context.stop()}}),_callee)})))()},data:function data(){return{image:null,attributionMarkup:"",skipToContentTargetId:constants_window.b}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(_id_reportvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("main",{staticClass:"mx-auto mb-6 mt-8 max-w-none gap-x-10 px-4 md:grid md:max-w-4xl md:grid-cols-2 md:px-6 lg:mb-30 lg:px-0 xl:max-w-4xl",attrs:{id:_vm.skipToContentTargetId,tabindex:"-1"}},[_vm.image?_c("figure",{staticClass:"mb-6 flex flex-col items-start gap-y-4"},[_c("img",{staticClass:"mx-auto h-auto w-full rounded-sm",attrs:{id:"main-image",src:_vm.image.thumbnail,alt:_vm.image.title,width:_vm.image.width,height:_vm.image.height}}),_vm._v(" "),_c("figcaption",{staticClass:"block w-full text-left text-sr",domProps:{innerHTML:_vm._s(_vm.attributionMarkup)}}),_vm._v(" "),_c("VButton",{staticClass:"label-bold",attrs:{variant:"bordered-gray",href:"/image/".concat(_vm.image.id),as:"VLink",size:"medium"}},[_vm._v("\n      "+_vm._s(_vm.$t("report.imageDetails"))+"\n    ")])],1):_vm._e(),_vm._v(" "),_vm.image?_c("VContentReportForm",{attrs:{"close-fn":function closeFn(){},media:_vm.image,"allow-cancel":!1,"provider-name":_vm.image.providerName||_vm.image.provider}}):_vm._e()],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VButton:__webpack_require__("./src/components/VButton.vue").default,VContentReportForm:__webpack_require__("./src/components/VContentReport/VContentReportForm.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"ReportImage",exportName:"default",description:"",tags:{}}}}]);