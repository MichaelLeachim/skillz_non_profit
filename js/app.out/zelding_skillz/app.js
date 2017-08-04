// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('zelding_skillz.app');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('zelding_skillz.templates.index');
goog.require('re_frame.core');
goog.require('zelding_skillz.subs');
goog.require('zelding_skillz.effects');
goog.require('zelding_skillz.events');
zelding_skillz.app.init = (function zelding_skillz$app$init(){
var G__17087_17092 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$init], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__17087_17092) : re_frame.core.dispatch.call(null,G__17087_17092));

var G__17088_17093 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zelding_skillz.templates.index.header], null);
var G__17089_17094 = document.getElementById("header");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__17088_17093,G__17089_17094) : reagent.core.render_component.call(null,G__17088_17093,G__17089_17094));

var G__17090 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zelding_skillz.templates.index.main], null);
var G__17091 = document.getElementById("main");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__17090,G__17091) : reagent.core.render_component.call(null,G__17090,G__17091));
});
