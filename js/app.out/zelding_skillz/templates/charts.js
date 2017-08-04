// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('zelding_skillz.templates.charts');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
zelding_skillz.templates.charts.drop_3d_chart = (function zelding_skillz$templates$charts$drop_3d_chart(){
return (window["DestroyChart"]).call(null);
});
zelding_skillz.templates.charts.draw_3d_chart = (function zelding_skillz$templates$charts$draw_3d_chart(chart_type,container,width,height,dataset,x_vals,y_vals,z_vals){
return (window["DrawChart"]).call(null,chart_type,container,width,height,cljs.core.clj__GT_js(dataset),(function (val){
var or__7215__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(x_vals,val);
if(cljs.core.truth_(or__7215__auto__)){
return or__7215__auto__;
} else {
return "n/a";
}
}),(function (val){
var or__7215__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(y_vals,val);
if(cljs.core.truth_(or__7215__auto__)){
return or__7215__auto__;
} else {
return "n/a";
}
}),(function (val){
var or__7215__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(z_vals,val);
if(cljs.core.truth_(or__7215__auto__)){
return or__7215__auto__;
} else {
return "n/a";
}
}));
});
zelding_skillz.templates.charts.chart_3d = (function zelding_skillz$templates$charts$chart_3d(chart_type,width,height,dataset,x_vals,y_vals,z_vals){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height,cljs.core.cst$kw$dataset,dataset,cljs.core.cst$kw$x_DASH_vals,x_vals,cljs.core.cst$kw$y_DASH_vals,y_vals,cljs.core.cst$kw$z_DASH_vals,z_vals,cljs.core.cst$kw$chart_DASH_type,chart_type], null));
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (state){
return (function (){
return zelding_skillz.templates.charts.draw_3d_chart(cljs.core.cst$kw$chart_DASH_type.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),"some-chart",cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),cljs.core.cst$kw$dataset.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),cljs.core.cst$kw$x_DASH_vals.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),cljs.core.cst$kw$y_DASH_vals.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),cljs.core.cst$kw$z_DASH_vals.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))));
});})(state))
,cljs.core.cst$kw$component_DASH_did_DASH_update,((function (state){
return (function (){
return zelding_skillz.templates.charts.draw_3d_chart(cljs.core.cst$kw$chart_DASH_type.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),"some-chart",cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),cljs.core.cst$kw$dataset.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),cljs.core.cst$kw$x_DASH_vals.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),cljs.core.cst$kw$y_DASH_vals.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),cljs.core.cst$kw$z_DASH_vals.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))));
});})(state))
,cljs.core.cst$kw$component_DASH_will_DASH_unmount,zelding_skillz.templates.charts.drop_3d_chart,cljs.core.cst$kw$display_DASH_name,"3d-chart",cljs.core.cst$kw$reagent_DASH_render,((function (state){
return (function (chart_type__$1,width__$1,height__$1,dataset__$1,x_vals__$1,y_vals__$1,z_vals__$1){
var G__16068_16070 = state;
var G__16069_16071 = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$width,width__$1,cljs.core.cst$kw$height,height__$1,cljs.core.cst$kw$dataset,dataset__$1,cljs.core.cst$kw$x_DASH_vals,x_vals__$1,cljs.core.cst$kw$y_DASH_vals,y_vals__$1,cljs.core.cst$kw$z_DASH_vals,z_vals__$1,cljs.core.cst$kw$chart_DASH_type,chart_type__$1], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16068_16070,G__16069_16071) : cljs.core.reset_BANG_.call(null,G__16068_16070,G__16069_16071));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"some-chart"], null)], null);
});})(state))
], null));
});
