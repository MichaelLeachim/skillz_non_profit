// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('zelding_skillz.templates.filters');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('zelding_skillz.templates.uilib');
goog.require('reagent.core');
zelding_skillz.templates.filters.e__GT_content = (function zelding_skillz$templates$filters$e__GT_content(e){
return (e["target"]["value"]);
});
zelding_skillz.templates.filters.help_item = (function zelding_skillz$templates$filters$help_item(tooltip_data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$btn$tooltipped,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data_DASH_position,"top",cljs.core.cst$kw$data_DASH_delay,"50",cljs.core.cst$kw$data_DASH_tooltip,tooltip_data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,"help"], null)], null);
});
zelding_skillz.templates.filters.filterable_table = (function zelding_skillz$templates$filters$filterable_table(item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$width,"1px",cljs.core.cst$kw$height,"100vh",cljs.core.cst$kw$left,"300px",cljs.core.cst$kw$background_DASH_color,"grey"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$centered,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overflow_DASH_x,"scroll"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,(function (){var iter__8003__auto__ = (function zelding_skillz$templates$filters$filterable_table_$_iter__16209(s__16210){
return (new cljs.core.LazySeq(null,(function (){
var s__16210__$1 = s__16210;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16210__$1);
if(temp__4657__auto__){
var s__16210__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16210__$2)){
var c__8001__auto__ = cljs.core.chunk_first(s__16210__$2);
var size__8002__auto__ = cljs.core.count(c__8001__auto__);
var b__16212 = cljs.core.chunk_buffer(size__8002__auto__);
if((function (){var i__16211 = (0);
while(true){
if((i__16211 < size__8002__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8001__auto__,i__16211);
cljs.core.chunk_append(b__16212,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,"first"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"0px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$left,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null)], null),((!(cljs.core.empty_QMARK_((function (){var G__16223 = cljs.core.cst$kw$cleanable;
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__16223) : item.call(null,G__16223));
})())))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#4267b2"], null),cljs.core.cst$kw$on_DASH_click,((function (i__16211,i,c__8001__auto__,size__8002__auto__,b__16212,s__16210__$2,temp__4657__auto__){
return (function (p1__16091_SHARP_){
p1__16091_SHARP_.preventDefault();

var G__16224 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unchoose_DASH_filters,cljs.core.cst$kw$cleanable.cljs$core$IFn$_invoke$arity$1(item)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16224) : re_frame.core.dispatch.call(null,G__16224));
});})(i__16211,i,c__8001__auto__,size__8002__auto__,b__16212,s__16210__$2,temp__4657__auto__))
], null),"(\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C) "], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"12px"], null)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$onMouseEnter,((function (i__16211,i,c__8001__auto__,size__8002__auto__,b__16212,s__16210__$2,temp__4657__auto__){
return (function (){
var G__16225 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$month_DASH_dot_DASH_click,i], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16225) : re_frame.core.dispatch.call(null,G__16225));
});})(i__16211,i,c__8001__auto__,size__8002__auto__,b__16212,s__16210__$2,temp__4657__auto__))
,cljs.core.cst$kw$onMouseLeave,((function (i__16211,i,c__8001__auto__,size__8002__auto__,b__16212,s__16210__$2,temp__4657__auto__){
return (function (){
var G__16226 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clear_DASH_hover_DASH_on], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16226) : re_frame.core.dispatch.call(null,G__16226));
});})(i__16211,i,c__8001__auto__,size__8002__auto__,b__16212,s__16210__$2,temp__4657__auto__))
], null),"\u043C. ",i], null)));

var G__16325 = (i__16211 + (1));
i__16211 = G__16325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16212),zelding_skillz$templates$filters$filterable_table_$_iter__16209(cljs.core.chunk_rest(s__16210__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16212),null);
}
} else {
var i = cljs.core.first(s__16210__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,"first"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"0px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$left,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null)], null),((!(cljs.core.empty_QMARK_((function (){var G__16227 = cljs.core.cst$kw$cleanable;
return (item.cljs$core$IFn$_invoke$arity$1 ? item.cljs$core$IFn$_invoke$arity$1(G__16227) : item.call(null,G__16227));
})())))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#4267b2"], null),cljs.core.cst$kw$on_DASH_click,((function (i,s__16210__$2,temp__4657__auto__){
return (function (p1__16091_SHARP_){
p1__16091_SHARP_.preventDefault();

var G__16228 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unchoose_DASH_filters,cljs.core.cst$kw$cleanable.cljs$core$IFn$_invoke$arity$1(item)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16228) : re_frame.core.dispatch.call(null,G__16228));
});})(i,s__16210__$2,temp__4657__auto__))
], null),"(\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C) "], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"12px"], null)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$onMouseEnter,((function (i,s__16210__$2,temp__4657__auto__){
return (function (){
var G__16229 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$month_DASH_dot_DASH_click,i], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16229) : re_frame.core.dispatch.call(null,G__16229));
});})(i,s__16210__$2,temp__4657__auto__))
,cljs.core.cst$kw$onMouseLeave,((function (i,s__16210__$2,temp__4657__auto__){
return (function (){
var G__16230 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clear_DASH_hover_DASH_on], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16230) : re_frame.core.dispatch.call(null,G__16230));
});})(i,s__16210__$2,temp__4657__auto__))
], null),"\u043C. ",i], null)),zelding_skillz$templates$filters$filterable_table_$_iter__16209(cljs.core.rest(s__16210__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8003__auto__(cljs.core.cons("first",cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(item)));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__8003__auto__ = (function zelding_skillz$templates$filters$filterable_table_$_iter__16231(s__16232){
return (new cljs.core.LazySeq(null,(function (){
var s__16232__$1 = s__16232;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16232__$1);
if(temp__4657__auto__){
var s__16232__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16232__$2)){
var c__8001__auto__ = cljs.core.chunk_first(s__16232__$2);
var size__8002__auto__ = cljs.core.count(c__8001__auto__);
var b__16234 = cljs.core.chunk_buffer(size__8002__auto__);
if((function (){var i__16233 = (0);
while(true){
if((i__16233 < size__8002__auto__)){
var item__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8001__auto__,i__16233);
cljs.core.chunk_append(b__16234,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$font_DASH_size,"14px",cljs.core.cst$kw$height,"30px",cljs.core.cst$kw$width,"300px",cljs.core.cst$kw$padding_DASH_right,"10px",cljs.core.cst$kw$text_DASH_align,"left"], null),cljs.core.cst$kw$onMouseEnter,((function (i__16233,item__$1,c__8001__auto__,size__8002__auto__,b__16234,s__16232__$2,temp__4657__auto__){
return (function (){
var G__16281 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$skill_DASH_dot_DASH_click,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$1)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16281) : re_frame.core.dispatch.call(null,G__16281));
});})(i__16233,item__$1,c__8001__auto__,size__8002__auto__,b__16234,s__16232__$2,temp__4657__auto__))
,cljs.core.cst$kw$onMouseLeave,((function (i__16233,item__$1,c__8001__auto__,size__8002__auto__,b__16234,s__16232__$2,temp__4657__auto__){
return (function (){
var G__16282 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clear_DASH_hover_DASH_on], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16282) : re_frame.core.dispatch.call(null,G__16282));
});})(i__16233,item__$1,c__8001__auto__,size__8002__auto__,b__16234,s__16232__$2,temp__4657__auto__))
,cljs.core.cst$kw$onClick,((function (i__16233,item__$1,c__8001__auto__,size__8002__auto__,b__16234,s__16232__$2,temp__4657__auto__){
return (function (){
if(cljs.core.truth_(cljs.core.cst$kw$selected_QMARK_.cljs$core$IFn$_invoke$arity$1(item__$1))){
var G__16283 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unchoose_DASH_filter,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$1)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16283) : re_frame.core.dispatch.call(null,G__16283));
} else {
var G__16284 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$choose_DASH_filter,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$1)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16284) : re_frame.core.dispatch.call(null,G__16284));
}
});})(i__16233,item__$1,c__8001__auto__,size__8002__auto__,b__16234,s__16232__$2,temp__4657__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$filled_DASH_in,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("blab_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$1))].join(''),cljs.core.cst$kw$checked,(cljs.core.truth_(cljs.core.cst$kw$selected_QMARK_.cljs$core$IFn$_invoke$arity$1(item__$1))?"checked":"")], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("blab_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$1))].join('')], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$1),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"13px"], null)], null)," (",cljs.core.cst$kw$max_DASH_level.cljs$core$IFn$_invoke$arity$1(item__$1),")"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zelding_skillz.templates.uilib.help_tooltip,cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(item__$1)], null)], null)], null)], null),(function (){var iter__8003__auto__ = ((function (i__16233,item__$1,c__8001__auto__,size__8002__auto__,b__16234,s__16232__$2,temp__4657__auto__){
return (function zelding_skillz$templates$filters$filterable_table_$_iter__16231_$_iter__16285(s__16286){
return (new cljs.core.LazySeq(null,((function (i__16233,item__$1,c__8001__auto__,size__8002__auto__,b__16234,s__16232__$2,temp__4657__auto__){
return (function (){
var s__16286__$1 = s__16286;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__16286__$1);
if(temp__4657__auto____$1){
var s__16286__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16286__$2)){
var c__8001__auto____$1 = cljs.core.chunk_first(s__16286__$2);
var size__8002__auto____$1 = cljs.core.count(c__8001__auto____$1);
var b__16288 = cljs.core.chunk_buffer(size__8002__auto____$1);
if((function (){var i__16287 = (0);
while(true){
if((i__16287 < size__8002__auto____$1)){
var point = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8001__auto____$1,i__16287);
cljs.core.chunk_append(b__16288,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"0px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$browser_DASH_default,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$cur_DASH_level.cljs$core$IFn$_invoke$arity$1(point),cljs.core.cst$kw$placeholder,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("0.."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$max_DASH_level.cljs$core$IFn$_invoke$arity$1(point))].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$background_DASH_color,(cljs.core.truth_(cljs.core.cst$kw$highlight_QMARK_.cljs$core$IFn$_invoke$arity$1(point))?"rgb(160, 195, 255)":"white"),cljs.core.cst$kw$padding,"0px",cljs.core.cst$kw$margin,"0px"], null),cljs.core.cst$kw$on_DASH_change,((function (i__16287,i__16233,point,c__8001__auto____$1,size__8002__auto____$1,b__16288,s__16286__$2,temp__4657__auto____$1,item__$1,c__8001__auto__,size__8002__auto__,b__16234,s__16232__$2,temp__4657__auto__){
return (function (p1__16092_SHARP_){
var G__16297 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_level,(function (){var G__16298 = cljs.core.cst$kw$skill;
return (point.cljs$core$IFn$_invoke$arity$1 ? point.cljs$core$IFn$_invoke$arity$1(G__16298) : point.call(null,G__16298));
})(),(function (){var G__16299 = cljs.core.cst$kw$month;
return (point.cljs$core$IFn$_invoke$arity$1 ? point.cljs$core$IFn$_invoke$arity$1(G__16299) : point.call(null,G__16299));
})(),zelding_skillz.templates.filters.e__GT_content(p1__16092_SHARP_)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16297) : re_frame.core.dispatch.call(null,G__16297));
});})(i__16287,i__16233,point,c__8001__auto____$1,size__8002__auto____$1,b__16288,s__16286__$2,temp__4657__auto____$1,item__$1,c__8001__auto__,size__8002__auto__,b__16234,s__16232__$2,temp__4657__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$month.cljs$core$IFn$_invoke$arity$1(point)], null)));

var G__16326 = (i__16287 + (1));
i__16287 = G__16326;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16288),zelding_skillz$templates$filters$filterable_table_$_iter__16231_$_iter__16285(cljs.core.chunk_rest(s__16286__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16288),null);
}
} else {
var point = cljs.core.first(s__16286__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"0px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$browser_DASH_default,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$cur_DASH_level.cljs$core$IFn$_invoke$arity$1(point),cljs.core.cst$kw$placeholder,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("0.."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$max_DASH_level.cljs$core$IFn$_invoke$arity$1(point))].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$background_DASH_color,(cljs.core.truth_(cljs.core.cst$kw$highlight_QMARK_.cljs$core$IFn$_invoke$arity$1(point))?"rgb(160, 195, 255)":"white"),cljs.core.cst$kw$padding,"0px",cljs.core.cst$kw$margin,"0px"], null),cljs.core.cst$kw$on_DASH_change,((function (i__16233,point,s__16286__$2,temp__4657__auto____$1,item__$1,c__8001__auto__,size__8002__auto__,b__16234,s__16232__$2,temp__4657__auto__){
return (function (p1__16092_SHARP_){
var G__16300 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_level,(function (){var G__16301 = cljs.core.cst$kw$skill;
return (point.cljs$core$IFn$_invoke$arity$1 ? point.cljs$core$IFn$_invoke$arity$1(G__16301) : point.call(null,G__16301));
})(),(function (){var G__16302 = cljs.core.cst$kw$month;
return (point.cljs$core$IFn$_invoke$arity$1 ? point.cljs$core$IFn$_invoke$arity$1(G__16302) : point.call(null,G__16302));
})(),zelding_skillz.templates.filters.e__GT_content(p1__16092_SHARP_)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16300) : re_frame.core.dispatch.call(null,G__16300));
});})(i__16233,point,s__16286__$2,temp__4657__auto____$1,item__$1,c__8001__auto__,size__8002__auto__,b__16234,s__16232__$2,temp__4657__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$month.cljs$core$IFn$_invoke$arity$1(point)], null)),zelding_skillz$templates$filters$filterable_table_$_iter__16231_$_iter__16285(cljs.core.rest(s__16286__$2)));
}
} else {
return null;
}
break;
}
});})(i__16233,item__$1,c__8001__auto__,size__8002__auto__,b__16234,s__16232__$2,temp__4657__auto__))
,null,null));
});})(i__16233,item__$1,c__8001__auto__,size__8002__auto__,b__16234,s__16232__$2,temp__4657__auto__))
;
return iter__8003__auto__(cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(item__$1));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$1)], null)));

var G__16327 = (i__16233 + (1));
i__16233 = G__16327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16234),zelding_skillz$templates$filters$filterable_table_$_iter__16231(cljs.core.chunk_rest(s__16232__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16234),null);
}
} else {
var item__$1 = cljs.core.first(s__16232__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$font_DASH_size,"14px",cljs.core.cst$kw$height,"30px",cljs.core.cst$kw$width,"300px",cljs.core.cst$kw$padding_DASH_right,"10px",cljs.core.cst$kw$text_DASH_align,"left"], null),cljs.core.cst$kw$onMouseEnter,((function (item__$1,s__16232__$2,temp__4657__auto__){
return (function (){
var G__16303 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$skill_DASH_dot_DASH_click,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$1)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16303) : re_frame.core.dispatch.call(null,G__16303));
});})(item__$1,s__16232__$2,temp__4657__auto__))
,cljs.core.cst$kw$onMouseLeave,((function (item__$1,s__16232__$2,temp__4657__auto__){
return (function (){
var G__16304 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clear_DASH_hover_DASH_on], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16304) : re_frame.core.dispatch.call(null,G__16304));
});})(item__$1,s__16232__$2,temp__4657__auto__))
,cljs.core.cst$kw$onClick,((function (item__$1,s__16232__$2,temp__4657__auto__){
return (function (){
if(cljs.core.truth_(cljs.core.cst$kw$selected_QMARK_.cljs$core$IFn$_invoke$arity$1(item__$1))){
var G__16305 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unchoose_DASH_filter,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$1)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16305) : re_frame.core.dispatch.call(null,G__16305));
} else {
var G__16306 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$choose_DASH_filter,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$1)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16306) : re_frame.core.dispatch.call(null,G__16306));
}
});})(item__$1,s__16232__$2,temp__4657__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$filled_DASH_in,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("blab_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$1))].join(''),cljs.core.cst$kw$checked,(cljs.core.truth_(cljs.core.cst$kw$selected_QMARK_.cljs$core$IFn$_invoke$arity$1(item__$1))?"checked":"")], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("blab_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$1))].join('')], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$1),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"13px"], null)], null)," (",cljs.core.cst$kw$max_DASH_level.cljs$core$IFn$_invoke$arity$1(item__$1),")"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zelding_skillz.templates.uilib.help_tooltip,cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(item__$1)], null)], null)], null)], null),(function (){var iter__8003__auto__ = ((function (item__$1,s__16232__$2,temp__4657__auto__){
return (function zelding_skillz$templates$filters$filterable_table_$_iter__16231_$_iter__16307(s__16308){
return (new cljs.core.LazySeq(null,((function (item__$1,s__16232__$2,temp__4657__auto__){
return (function (){
var s__16308__$1 = s__16308;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__16308__$1);
if(temp__4657__auto____$1){
var s__16308__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16308__$2)){
var c__8001__auto__ = cljs.core.chunk_first(s__16308__$2);
var size__8002__auto__ = cljs.core.count(c__8001__auto__);
var b__16310 = cljs.core.chunk_buffer(size__8002__auto__);
if((function (){var i__16309 = (0);
while(true){
if((i__16309 < size__8002__auto__)){
var point = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8001__auto__,i__16309);
cljs.core.chunk_append(b__16310,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"0px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$browser_DASH_default,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$cur_DASH_level.cljs$core$IFn$_invoke$arity$1(point),cljs.core.cst$kw$placeholder,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("0.."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$max_DASH_level.cljs$core$IFn$_invoke$arity$1(point))].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$background_DASH_color,(cljs.core.truth_(cljs.core.cst$kw$highlight_QMARK_.cljs$core$IFn$_invoke$arity$1(point))?"rgb(160, 195, 255)":"white"),cljs.core.cst$kw$padding,"0px",cljs.core.cst$kw$margin,"0px"], null),cljs.core.cst$kw$on_DASH_change,((function (i__16309,point,c__8001__auto__,size__8002__auto__,b__16310,s__16308__$2,temp__4657__auto____$1,item__$1,s__16232__$2,temp__4657__auto__){
return (function (p1__16092_SHARP_){
var G__16319 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_level,(function (){var G__16320 = cljs.core.cst$kw$skill;
return (point.cljs$core$IFn$_invoke$arity$1 ? point.cljs$core$IFn$_invoke$arity$1(G__16320) : point.call(null,G__16320));
})(),(function (){var G__16321 = cljs.core.cst$kw$month;
return (point.cljs$core$IFn$_invoke$arity$1 ? point.cljs$core$IFn$_invoke$arity$1(G__16321) : point.call(null,G__16321));
})(),zelding_skillz.templates.filters.e__GT_content(p1__16092_SHARP_)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16319) : re_frame.core.dispatch.call(null,G__16319));
});})(i__16309,point,c__8001__auto__,size__8002__auto__,b__16310,s__16308__$2,temp__4657__auto____$1,item__$1,s__16232__$2,temp__4657__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$month.cljs$core$IFn$_invoke$arity$1(point)], null)));

var G__16328 = (i__16309 + (1));
i__16309 = G__16328;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16310),zelding_skillz$templates$filters$filterable_table_$_iter__16231_$_iter__16307(cljs.core.chunk_rest(s__16308__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16310),null);
}
} else {
var point = cljs.core.first(s__16308__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"0px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$browser_DASH_default,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$cur_DASH_level.cljs$core$IFn$_invoke$arity$1(point),cljs.core.cst$kw$placeholder,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("0.."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$max_DASH_level.cljs$core$IFn$_invoke$arity$1(point))].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$background_DASH_color,(cljs.core.truth_(cljs.core.cst$kw$highlight_QMARK_.cljs$core$IFn$_invoke$arity$1(point))?"rgb(160, 195, 255)":"white"),cljs.core.cst$kw$padding,"0px",cljs.core.cst$kw$margin,"0px"], null),cljs.core.cst$kw$on_DASH_change,((function (point,s__16308__$2,temp__4657__auto____$1,item__$1,s__16232__$2,temp__4657__auto__){
return (function (p1__16092_SHARP_){
var G__16322 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_level,(function (){var G__16323 = cljs.core.cst$kw$skill;
return (point.cljs$core$IFn$_invoke$arity$1 ? point.cljs$core$IFn$_invoke$arity$1(G__16323) : point.call(null,G__16323));
})(),(function (){var G__16324 = cljs.core.cst$kw$month;
return (point.cljs$core$IFn$_invoke$arity$1 ? point.cljs$core$IFn$_invoke$arity$1(G__16324) : point.call(null,G__16324));
})(),zelding_skillz.templates.filters.e__GT_content(p1__16092_SHARP_)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16322) : re_frame.core.dispatch.call(null,G__16322));
});})(point,s__16308__$2,temp__4657__auto____$1,item__$1,s__16232__$2,temp__4657__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$month.cljs$core$IFn$_invoke$arity$1(point)], null)),zelding_skillz$templates$filters$filterable_table_$_iter__16231_$_iter__16307(cljs.core.rest(s__16308__$2)));
}
} else {
return null;
}
break;
}
});})(item__$1,s__16232__$2,temp__4657__auto__))
,null,null));
});})(item__$1,s__16232__$2,temp__4657__auto__))
;
return iter__8003__auto__(cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(item__$1));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$1)], null)),zelding_skillz$templates$filters$filterable_table_$_iter__16231(cljs.core.rest(s__16232__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8003__auto__(cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(item));
})()], null)], null)], null)], null);
});
zelding_skillz.templates.filters.typical_filter = (function zelding_skillz$templates$filters$typical_filter(item){
var show_more_QMARK_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
return ((function (show_more_QMARK_){
return (function (item__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding_DASH_left,"10px",cljs.core.cst$kw$padding_DASH_bottom,"0px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"30px",cljs.core.cst$kw$cursor,"pointer"], null)], null),((!(cljs.core.empty_QMARK_((function (){var G__16342 = cljs.core.cst$kw$cleanable;
return (item__$1.cljs$core$IFn$_invoke$arity$1 ? item__$1.cljs$core$IFn$_invoke$arity$1(G__16342) : item__$1.call(null,G__16342));
})())))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#4267b2"], null),cljs.core.cst$kw$on_DASH_click,((function (show_more_QMARK_){
return (function (p1__16329_SHARP_){
p1__16329_SHARP_.preventDefault();

var G__16343 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unchoose_DASH_filters,cljs.core.cst$kw$cleanable.cljs$core$IFn$_invoke$arity$1(item__$1)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16343) : re_frame.core.dispatch.call(null,G__16343));
});})(show_more_QMARK_))
], null),"(\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C) "], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"14px"], null),cljs.core.cst$kw$on_DASH_click,((function (show_more_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_more_QMARK_,cljs.core.not);
});})(show_more_QMARK_))
], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$1),(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(show_more_QMARK_) : cljs.core.deref.call(null,show_more_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cursor,"pointer",cljs.core.cst$kw$font_DASH_size,"14px"], null)], null),"expand_less"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cursor,"pointer",cljs.core.cst$kw$font_DASH_size,"14px"], null)], null),"expand_more"], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(function (){var iter__8003__auto__ = ((function (show_more_QMARK_){
return (function zelding_skillz$templates$filters$typical_filter_$_iter__16344(s__16345){
return (new cljs.core.LazySeq(null,((function (show_more_QMARK_){
return (function (){
var s__16345__$1 = s__16345;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16345__$1);
if(temp__4657__auto__){
var s__16345__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16345__$2)){
var c__8001__auto__ = cljs.core.chunk_first(s__16345__$2);
var size__8002__auto__ = cljs.core.count(c__8001__auto__);
var b__16347 = cljs.core.chunk_buffer(size__8002__auto__);
if((function (){var i__16346 = (0);
while(true){
if((i__16346 < size__8002__auto__)){
var item__$2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8001__auto__,i__16346);
cljs.core.chunk_append(b__16347,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"14px",cljs.core.cst$kw$height,"30px"], null),cljs.core.cst$kw$onClick,((function (i__16346,item__$2,c__8001__auto__,size__8002__auto__,b__16347,s__16345__$2,temp__4657__auto__,show_more_QMARK_){
return (function (){
console.log("asd");

var G__16352 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$click_DASH_filter,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$2)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16352) : re_frame.core.dispatch.call(null,G__16352));
});})(i__16346,item__$2,c__8001__auto__,size__8002__auto__,b__16347,s__16345__$2,temp__4657__auto__,show_more_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$filled_DASH_in,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("blab_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$2))].join(''),cljs.core.cst$kw$checked,(cljs.core.truth_(cljs.core.cst$kw$selected_QMARK_.cljs$core$IFn$_invoke$arity$1(item__$2))?"checked":"")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("blab_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$2))].join('')], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$2)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$2)], null)));

var G__16354 = (i__16346 + (1));
i__16346 = G__16354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16347),zelding_skillz$templates$filters$typical_filter_$_iter__16344(cljs.core.chunk_rest(s__16345__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16347),null);
}
} else {
var item__$2 = cljs.core.first(s__16345__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"14px",cljs.core.cst$kw$height,"30px"], null),cljs.core.cst$kw$onClick,((function (item__$2,s__16345__$2,temp__4657__auto__,show_more_QMARK_){
return (function (){
console.log("asd");

var G__16353 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$click_DASH_filter,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$2)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16353) : re_frame.core.dispatch.call(null,G__16353));
});})(item__$2,s__16345__$2,temp__4657__auto__,show_more_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$filled_DASH_in,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("blab_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$2))].join(''),cljs.core.cst$kw$checked,(cljs.core.truth_(cljs.core.cst$kw$selected_QMARK_.cljs$core$IFn$_invoke$arity$1(item__$2))?"checked":"")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("blab_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$2))].join('')], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$2)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item__$2)], null)),zelding_skillz$templates$filters$typical_filter_$_iter__16344(cljs.core.rest(s__16345__$2)));
}
} else {
return null;
}
break;
}
});})(show_more_QMARK_))
,null,null));
});})(show_more_QMARK_))
;
return iter__8003__auto__((cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(show_more_QMARK_) : cljs.core.deref.call(null,show_more_QMARK_)))?cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(item__$1):cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(item__$1))));
})()], null)], null);
});
;})(show_more_QMARK_))
});
