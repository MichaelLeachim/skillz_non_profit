// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = cljs.core.cst$kw$event;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.events.kind) : re_frame.registrar.kinds.call(null,re_frame.events.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__14599_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(p1__14599_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain(interceptors);
} else {
if(cljs.core.coll_QMARK_(interceptors)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected a collection of interceptors, got:")].join(''),interceptors], 0));
}

var chain = make_chain(interceptors);
if(cljs.core.empty_QMARK_(chain)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", given an empty interceptor chain")].join('')], 0));
} else {
}

var temp__4657__auto___14600 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___14600)){
var not_i_14601 = temp__4657__auto___14600;
if(cljs.core.fn_QMARK_(not_i_14601)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_14601], 0));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected interceptors, but got:")].join(''),not_i_14601], 0));
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler(re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils(id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector(event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: while handling \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_frame.events._STAR_handling_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\", dispatch-sync was called for \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_v),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". You can't call dispatch-sync within an event handler.")].join('')], 0));
} else {
var _STAR_handling_STAR_14618 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_14619 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,event_id,cljs.core.cst$kw$op_DASH_type,re_frame.events.kind,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,event_v], null)], null));

try{try{return re_frame.interceptor.execute(event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14574__auto___14634 = re_frame.interop.now();
var duration__14575__auto___14635 = (end__14574__auto___14634 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__14620_14636 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__14621_14637 = null;
var count__14622_14638 = (0);
var i__14623_14639 = (0);
while(true){
if((i__14623_14639 < count__14622_14638)){
var vec__14624_14640 = chunk__14621_14637.cljs$core$IIndexed$_nth$arity$2(null,i__14623_14639);
var k__14576__auto___14641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14624_14640,(0),null);
var cb__14577__auto___14642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14624_14640,(1),null);
try{var G__14628_14643 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14575__auto___14635,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14577__auto___14642.cljs$core$IFn$_invoke$arity$1 ? cb__14577__auto___14642.cljs$core$IFn$_invoke$arity$1(G__14628_14643) : cb__14577__auto___14642.call(null,G__14628_14643));
}catch (e14627){if((e14627 instanceof java.lang.Exception)){
var e__14578__auto___14644 = e14627;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14576__auto___14641,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14578__auto___14644], 0));
} else {
throw e14627;

}
}
var G__14645 = seq__14620_14636;
var G__14646 = chunk__14621_14637;
var G__14647 = count__14622_14638;
var G__14648 = (i__14623_14639 + (1));
seq__14620_14636 = G__14645;
chunk__14621_14637 = G__14646;
count__14622_14638 = G__14647;
i__14623_14639 = G__14648;
continue;
} else {
var temp__4657__auto___14649 = cljs.core.seq(seq__14620_14636);
if(temp__4657__auto___14649){
var seq__14620_14650__$1 = temp__4657__auto___14649;
if(cljs.core.chunked_seq_QMARK_(seq__14620_14650__$1)){
var c__8034__auto___14651 = cljs.core.chunk_first(seq__14620_14650__$1);
var G__14652 = cljs.core.chunk_rest(seq__14620_14650__$1);
var G__14653 = c__8034__auto___14651;
var G__14654 = cljs.core.count(c__8034__auto___14651);
var G__14655 = (0);
seq__14620_14636 = G__14652;
chunk__14621_14637 = G__14653;
count__14622_14638 = G__14654;
i__14623_14639 = G__14655;
continue;
} else {
var vec__14629_14656 = cljs.core.first(seq__14620_14650__$1);
var k__14576__auto___14657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14629_14656,(0),null);
var cb__14577__auto___14658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14629_14656,(1),null);
try{var G__14633_14659 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14575__auto___14635,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14577__auto___14658.cljs$core$IFn$_invoke$arity$1 ? cb__14577__auto___14658.cljs$core$IFn$_invoke$arity$1(G__14633_14659) : cb__14577__auto___14658.call(null,G__14633_14659));
}catch (e14632){if((e14632 instanceof java.lang.Exception)){
var e__14578__auto___14660 = e14632;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14576__auto___14657,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14578__auto___14660], 0));
} else {
throw e14632;

}
}
var G__14661 = cljs.core.next(seq__14620_14650__$1);
var G__14662 = null;
var G__14663 = (0);
var G__14664 = (0);
seq__14620_14636 = G__14661;
chunk__14621_14637 = G__14662;
count__14622_14638 = G__14663;
i__14623_14639 = G__14664;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14619;
}} else {
return re_frame.interceptor.execute(event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_14618;
}}
} else {
return null;
}
});
