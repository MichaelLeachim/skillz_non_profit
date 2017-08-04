// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('zelding_skillz.templates.index');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('zelding_skillz.templates.navbar');
goog.require('zelding_skillz.templates.filters');
goog.require('zelding_skillz.templates.charts');
goog.require('re_frame.core');
zelding_skillz.templates.index.loading = (function zelding_skillz$templates$index$loading(){
if(cljs.core.truth_((function (){var G__16359 = (function (){var G__16360 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16360) : re_frame.core.subscribe.call(null,G__16360));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16359) : cljs.core.deref.call(null,G__16359));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$top,"0px",cljs.core.cst$kw$bottom,"0px",cljs.core.cst$kw$left,"0px",cljs.core.cst$kw$right,"0px",cljs.core.cst$kw$background,"white",cljs.core.cst$kw$opacity,"0.8",cljs.core.cst$kw$z_DASH_index,"99999"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,"50%",cljs.core.cst$kw$right,"50%",cljs.core.cst$kw$top,"50%",cljs.core.cst$kw$bottom,"50%"], null),cljs.core.cst$kw$src,"loading.gif"], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span], null);
}
});
zelding_skillz.templates.index.header = (function zelding_skillz$templates$index$header(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zelding_skillz.templates.navbar.navbar], null);
});
zelding_skillz.templates.index.chart_panel = (function zelding_skillz$templates$index$chart_panel(maxim_text,width,height){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5,"\u0413\u0440\u0430\u0444\u0438\u043A \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043C\u0435\u0436\u0434\u0443 \u0441\u043A\u0438\u043B\u043B\u0430\u043C\u0438"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"\u042D\u0442\u043E\u0442 \u0433\u0440\u0430\u0444\u0438\u043A \u043C\u043E\u0436\u043D\u043E \u0432\u0440\u0430\u0449\u0430\u0442\u044C \u0438 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0442\u044C"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"\u041A\u043B\u0438\u043A\u043D\u0443\u0442\u044C ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b," \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 "], null),"\u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0433\u0440\u0430\u0444\u0438\u043A"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default$waves_DASH_effect$waves_DASH_light$blue$darken_DASH_3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
var G__16373 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chart_DASH_maximize], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16373) : re_frame.core.dispatch.call(null,G__16373));
})], null),maxim_text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons$right,"zoom_out_map"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default$waves_DASH_effect$waves_DASH_light$blue$darken_DASH_3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
var G__16374 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$switch_DASH_chart_DASH_type], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16374) : re_frame.core.dispatch.call(null,G__16374));
})], null),"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0438\u043F \u0433\u0440\u0430\u0444\u0438\u043A\u0430",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons$right,"change_history"], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [zelding_skillz.templates.charts.chart_3d,(function (){var G__16375 = (function (){var G__16376 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chart_DASH_type], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16376) : re_frame.core.subscribe.call(null,G__16376));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16375) : cljs.core.deref.call(null,G__16375));
})(),height,width,(function (){var G__16377 = (function (){var G__16378 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$skillz$3dchart], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16378) : re_frame.core.subscribe.call(null,G__16378));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16377) : cljs.core.deref.call(null,G__16377));
})(),(function (){var G__16379 = (function (){var G__16380 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$skillz$3dchart$xaxis_DASH_labels], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16380) : re_frame.core.subscribe.call(null,G__16380));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16379) : cljs.core.deref.call(null,G__16379));
})(),(function (){var G__16381 = (function (){var G__16382 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$skillz$3dchart$yaxis_DASH_labels], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16382) : re_frame.core.subscribe.call(null,G__16382));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16381) : cljs.core.deref.call(null,G__16381));
})(),(function (){var G__16383 = (function (){var G__16384 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$skillz$3dchart$zaxis_DASH_labels], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16384) : re_frame.core.subscribe.call(null,G__16384));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16383) : cljs.core.deref.call(null,G__16383));
})()], null)], null);
});
zelding_skillz.templates.index.main = (function zelding_skillz$templates$index$main(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zelding_skillz.templates.index.loading], null),(cljs.core.truth_((function (){var G__16395 = (function (){var G__16396 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$chart_DASH_maximized_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16396) : re_frame.core.subscribe.call(null,G__16396));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16395) : cljs.core.deref.call(null,G__16395));
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col$s12,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zelding_skillz.templates.index.chart_panel,"\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C","100%","70vh"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$overflow_DASH_y,"scroll",cljs.core.cst$kw$overflow_DASH_x,"scroll",cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$top,"70px",cljs.core.cst$kw$bottom,"0px",cljs.core.cst$kw$width,"50%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,(function (){var iter__8003__auto__ = (function zelding_skillz$templates$index$main_$_iter__16397(s__16398){
return (new cljs.core.LazySeq(null,(function (){
var s__16398__$1 = s__16398;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16398__$1);
if(temp__4657__auto__){
var s__16398__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16398__$2)){
var c__8001__auto__ = cljs.core.chunk_first(s__16398__$2);
var size__8002__auto__ = cljs.core.count(c__8001__auto__);
var b__16400 = cljs.core.chunk_buffer(size__8002__auto__);
if((function (){var i__16399 = (0);
while(true){
if((i__16399 < size__8002__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8001__auto__,i__16399);
cljs.core.chunk_append(b__16400,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zelding_skillz.templates.filters.filterable_table,item], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__16405 = (i__16399 + (1));
i__16399 = G__16405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16400),zelding_skillz$templates$index$main_$_iter__16397(cljs.core.chunk_rest(s__16398__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16400),null);
}
} else {
var item = cljs.core.first(s__16398__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zelding_skillz.templates.filters.filterable_table,item], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)),zelding_skillz$templates$index$main_$_iter__16397(cljs.core.rest(s__16398__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8003__auto__((function (){var G__16403 = (function (){var G__16404 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$skillz$table], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16404) : re_frame.core.subscribe.call(null,G__16404));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16403) : cljs.core.deref.call(null,G__16403));
})());
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$top,"70px",cljs.core.cst$kw$bottom,"0px",cljs.core.cst$kw$left,"50%",cljs.core.cst$kw$right,"0px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col$s12,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zelding_skillz.templates.index.chart_panel,"\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C","100%","60vh"], null)], null)], null)], null)], null))], null);
});
zelding_skillz.templates.index.footer = (function zelding_skillz$templates$index$footer(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zelding_skillz.templates.navbar.footer], null);
});
