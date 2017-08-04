// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('zelding_skillz.effects');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('cognitect.transit');
zelding_skillz.effects.transit_write = (function zelding_skillz$effects$transit_write(x){
var w = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
return cognitect.transit.write(w,x);
});
zelding_skillz.effects.transit_read = (function zelding_skillz$effects$transit_read(x){
var r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
return cognitect.transit.read(r,x);
});
var G__15926_15928 = cljs.core.cst$kw$fx$show_DASH_error;
var G__15927_15929 = ((function (G__15926_15928){
return (function (err){
return (window["notify"]).call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join(''));
});})(G__15926_15928))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__15926_15928,G__15927_15929) : re_frame.core.reg_fx.call(null,G__15926_15928,G__15927_15929));
var G__15930_15932 = cljs.core.cst$kw$fx$store_DASH_state;
var G__15931_15933 = ((function (G__15930_15932){
return (function (state){
return (window["ls_set"]).call(null,"lostate",zelding_skillz.effects.transit_write(state));
});})(G__15930_15932))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__15930_15932,G__15931_15933) : re_frame.core.reg_fx.call(null,G__15930_15932,G__15931_15933));
var G__15934_15938 = cljs.core.cst$kw$fx$drop_DASH_state;
var G__15935_15939 = ((function (G__15934_15938){
return (function (state){
(window["ls_drop"]).call(null,"lostate");

var G__15936 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15937 = cljs.core.cst$kw$on_DASH_success;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__15937) : state.call(null,G__15937));
})()], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15936) : re_frame.core.dispatch.call(null,G__15936));
});})(G__15934_15938))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__15934_15938,G__15935_15939) : re_frame.core.reg_fx.call(null,G__15934_15938,G__15935_15939));
var G__15940_15948 = cljs.core.cst$kw$fx$load_DASH_state;
var G__15941_15949 = ((function (G__15940_15948){
return (function (data){
var on_success = (function (){var G__15942 = cljs.core.cst$kw$on_DASH_success;
return (data.cljs$core$IFn$_invoke$arity$1 ? data.cljs$core$IFn$_invoke$arity$1(G__15942) : data.call(null,G__15942));
})();
var on_fail = (function (){var G__15943 = cljs.core.cst$kw$on_DASH_fail;
return (data.cljs$core$IFn$_invoke$arity$1 ? data.cljs$core$IFn$_invoke$arity$1(G__15943) : data.call(null,G__15943));
})();
try{var app_state = zelding_skillz.effects.transit_read((window["ls_get"]).call(null,"lostate"));
if((app_state == null)){
var G__15946 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_fail,"No app state was saved"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15946) : re_frame.core.dispatch.call(null,G__15946));
} else {
var G__15947 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_success,app_state], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15947) : re_frame.core.dispatch.call(null,G__15947));
}
}catch (e15944){if((e15944 instanceof Error)){
var e = e15944;
var G__15945 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_fail,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15945) : re_frame.core.dispatch.call(null,G__15945));
} else {
throw e15944;

}
}});})(G__15940_15948))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__15940_15948,G__15941_15949) : re_frame.core.reg_fx.call(null,G__15940_15948,G__15941_15949));
var G__15950_15957 = cljs.core.cst$kw$fx$load_DASH_template;
var G__15951_15958 = ((function (G__15950_15957){
return (function (data){
var on_success = cljs.core.cst$kw$on_DASH_success.cljs$core$IFn$_invoke$arity$1(data);
var on_fail = cljs.core.cst$kw$on_DASH_fail.cljs$core$IFn$_invoke$arity$1(data);
console.log("fx load callback");

try{return (window["load_from_server"]).call(null,"template.xlsx",((function (on_success,on_fail,G__15950_15957){
return (function (item){
var result = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(item,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys], 0));
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,"json") == null))){
var G__15954 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_success,cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,"json")], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15954) : re_frame.core.dispatch.call(null,G__15954));
} else {
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,"err") == null))){
var G__15955 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_fail,cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,"err")], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15955) : re_frame.core.dispatch.call(null,G__15955));
} else {
var G__15956 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_fail,"Unknown error"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15956) : re_frame.core.dispatch.call(null,G__15956));

}
}
});})(on_success,on_fail,G__15950_15957))
);
}catch (e15952){if((e15952 instanceof Error)){
var e = e15952;
var G__15953 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_fail,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15953) : re_frame.core.dispatch.call(null,G__15953));
} else {
throw e15952;

}
}});})(G__15950_15957))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__15950_15957,G__15951_15958) : re_frame.core.reg_fx.call(null,G__15950_15957,G__15951_15958));
var G__15959_15966 = cljs.core.cst$kw$fx$load_DASH_excel;
var G__15960_15967 = ((function (G__15959_15966){
return (function (data){
var fobject = cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(data);
var on_success = cljs.core.cst$kw$on_DASH_success.cljs$core$IFn$_invoke$arity$1(data);
var on_fail = cljs.core.cst$kw$on_DASH_fail.cljs$core$IFn$_invoke$arity$1(data);
console.log("fx load callback");

try{return (window["make_excel_reader"]).call(null,fobject,((function (fobject,on_success,on_fail,G__15959_15966){
return (function (item){
var result = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(item,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys], 0));
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,"json") == null))){
var G__15963 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_success,cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,"json")], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15963) : re_frame.core.dispatch.call(null,G__15963));
} else {
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,"err") == null))){
var G__15964 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_fail,cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,"err")], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15964) : re_frame.core.dispatch.call(null,G__15964));
} else {
var G__15965 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_fail,"Unknown error"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15965) : re_frame.core.dispatch.call(null,G__15965));

}
}
});})(fobject,on_success,on_fail,G__15959_15966))
);
}catch (e15961){if((e15961 instanceof Error)){
var e = e15961;
var G__15962 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_fail,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15962) : re_frame.core.dispatch.call(null,G__15962));
} else {
throw e15961;

}
}});})(G__15959_15966))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__15959_15966,G__15960_15967) : re_frame.core.reg_fx.call(null,G__15959_15966,G__15960_15967));
var G__15968_15970 = cljs.core.cst$kw$fx$save_DASH_as_DASH_excel;
var G__15969_15971 = ((function (G__15968_15970){
return (function (data){
zelding_skillz.effects.hu = data;

return (window["js_arrays_to_xlsx"]).call(null,cljs.core.cst$kw$file_DASH_name.cljs$core$IFn$_invoke$arity$1(data),cljs.core.clj__GT_js(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(data)));
});})(G__15968_15970))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__15968_15970,G__15969_15971) : re_frame.core.reg_fx.call(null,G__15968_15970,G__15969_15971));
