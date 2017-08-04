// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.trace');
re_frame.subs.kind = cljs.core.cst$kw$sub;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.subs.kind) : re_frame.registrar.kinds.call(null,re_frame.subs.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.subs.query__GT_reaction = (function (){var G__14937 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14937) : cljs.core.atom.call(null,G__14937));
})();
/**
 * Runs on-dispose for all subscriptions we have in the subscription cache.
 *   Used to force recreation of new subscriptions. Should only be necessary
 *   in development.
 * 
 *   The on-dispose functions for the subscriptions will remove themselves from the
 *   cache.
 * 
 *   Useful when reloading Figwheel code after a React exception, as React components
 *   aren't cleaned up properly. This means a subscription's on-dispose function isn't
 *   run when the components are destroyed. If a bad subscription caused your exception,
 *   then you can't fix it without reloading your browser.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__14948_14958 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.subs.query__GT_reaction) : cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)));
var chunk__14949_14959 = null;
var count__14950_14960 = (0);
var i__14951_14961 = (0);
while(true){
if((i__14951_14961 < count__14950_14960)){
var vec__14952_14962 = chunk__14949_14959.cljs$core$IIndexed$_nth$arity$2(null,i__14951_14961);
var k_14963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14952_14962,(0),null);
var rxn_14964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14952_14962,(1),null);
re_frame.interop.dispose_BANG_(rxn_14964);

var G__14965 = seq__14948_14958;
var G__14966 = chunk__14949_14959;
var G__14967 = count__14950_14960;
var G__14968 = (i__14951_14961 + (1));
seq__14948_14958 = G__14965;
chunk__14949_14959 = G__14966;
count__14950_14960 = G__14967;
i__14951_14961 = G__14968;
continue;
} else {
var temp__4657__auto___14969 = cljs.core.seq(seq__14948_14958);
if(temp__4657__auto___14969){
var seq__14948_14970__$1 = temp__4657__auto___14969;
if(cljs.core.chunked_seq_QMARK_(seq__14948_14970__$1)){
var c__8034__auto___14971 = cljs.core.chunk_first(seq__14948_14970__$1);
var G__14972 = cljs.core.chunk_rest(seq__14948_14970__$1);
var G__14973 = c__8034__auto___14971;
var G__14974 = cljs.core.count(c__8034__auto___14971);
var G__14975 = (0);
seq__14948_14958 = G__14972;
chunk__14949_14959 = G__14973;
count__14950_14960 = G__14974;
i__14951_14961 = G__14975;
continue;
} else {
var vec__14955_14976 = cljs.core.first(seq__14948_14970__$1);
var k_14977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14955_14976,(0),null);
var rxn_14978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14955_14976,(1),null);
re_frame.interop.dispose_BANG_(rxn_14978);

var G__14979 = cljs.core.next(seq__14948_14970__$1);
var G__14980 = null;
var G__14981 = (0);
var G__14982 = (0);
seq__14948_14958 = G__14979;
chunk__14949_14959 = G__14980;
count__14950_14960 = G__14981;
i__14951_14961 = G__14982;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.subs.query__GT_reaction) : cljs.core.deref.call(null,re_frame.subs.query__GT_reaction))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.array_seq(["Subscription cache should be empty after clearing it."], 0));
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_();
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_(r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_14998 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_v),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_dispose,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query_v,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14574__auto___15013 = re_frame.interop.now();
var duration__14575__auto___15014 = (end__14574__auto___15013 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__14999_15015 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__15000_15016 = null;
var count__15001_15017 = (0);
var i__15002_15018 = (0);
while(true){
if((i__15002_15018 < count__15001_15017)){
var vec__15003_15019 = chunk__15000_15016.cljs$core$IIndexed$_nth$arity$2(null,i__15002_15018);
var k__14576__auto___15020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15003_15019,(0),null);
var cb__14577__auto___15021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15003_15019,(1),null);
try{var G__15007_15022 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14575__auto___15014,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14577__auto___15021.cljs$core$IFn$_invoke$arity$1 ? cb__14577__auto___15021.cljs$core$IFn$_invoke$arity$1(G__15007_15022) : cb__14577__auto___15021.call(null,G__15007_15022));
}catch (e15006){if((e15006 instanceof java.lang.Exception)){
var e__14578__auto___15023 = e15006;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14576__auto___15020,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14578__auto___15023], 0));
} else {
throw e15006;

}
}
var G__15024 = seq__14999_15015;
var G__15025 = chunk__15000_15016;
var G__15026 = count__15001_15017;
var G__15027 = (i__15002_15018 + (1));
seq__14999_15015 = G__15024;
chunk__15000_15016 = G__15025;
count__15001_15017 = G__15026;
i__15002_15018 = G__15027;
continue;
} else {
var temp__4657__auto___15028 = cljs.core.seq(seq__14999_15015);
if(temp__4657__auto___15028){
var seq__14999_15029__$1 = temp__4657__auto___15028;
if(cljs.core.chunked_seq_QMARK_(seq__14999_15029__$1)){
var c__8034__auto___15030 = cljs.core.chunk_first(seq__14999_15029__$1);
var G__15031 = cljs.core.chunk_rest(seq__14999_15029__$1);
var G__15032 = c__8034__auto___15030;
var G__15033 = cljs.core.count(c__8034__auto___15030);
var G__15034 = (0);
seq__14999_15015 = G__15031;
chunk__15000_15016 = G__15032;
count__15001_15017 = G__15033;
i__15002_15018 = G__15034;
continue;
} else {
var vec__15008_15035 = cljs.core.first(seq__14999_15029__$1);
var k__14576__auto___15036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15008_15035,(0),null);
var cb__14577__auto___15037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15008_15035,(1),null);
try{var G__15012_15038 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14575__auto___15014,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14577__auto___15037.cljs$core$IFn$_invoke$arity$1 ? cb__14577__auto___15037.cljs$core$IFn$_invoke$arity$1(G__15012_15038) : cb__14577__auto___15037.call(null,G__15012_15038));
}catch (e15011){if((e15011 instanceof java.lang.Exception)){
var e__14578__auto___15039 = e15011;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14576__auto___15036,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14578__auto___15039], 0));
} else {
throw e15011;

}
}
var G__15040 = cljs.core.next(seq__14999_15029__$1);
var G__15041 = null;
var G__15042 = (0);
var G__15043 = (0);
seq__14999_15015 = G__15040;
chunk__15000_15016 = G__15041;
count__15001_15017 = G__15042;
i__15002_15018 = G__15043;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14998;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14591__auto___15044 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14591__auto___15044;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var args15045 = [];
var len__8328__auto___15048 = arguments.length;
var i__8329__auto___15049 = (0);
while(true){
if((i__8329__auto___15049 < len__8328__auto___15048)){
args15045.push((arguments[i__8329__auto___15049]));

var G__15050 = (i__8329__auto___15049 + (1));
i__8329__auto___15049 = G__15050;
continue;
} else {
}
break;
}

var G__15047 = args15045.length;
switch (G__15047) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15045.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.subs.query__GT_reaction) : cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Returns a Reagent/reaction which contains a computation
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var args15052 = [];
var len__8328__auto___15093 = arguments.length;
var i__8329__auto___15094 = (0);
while(true){
if((i__8329__auto___15094 < len__8328__auto___15093)){
args15052.push((arguments[i__8329__auto___15094]));

var G__15095 = (i__8329__auto___15094 + (1));
i__8329__auto___15094 = G__15095;
continue;
} else {
}
break;
}

var G__15054 = args15052.length;
switch (G__15054) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15052.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_15055 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_v),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_create,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_v,query_v], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14591__auto___15097 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14591__auto___15097;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query_v);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14591__auto___15098 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14591__auto___15098;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14591__auto___15099 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14591__auto___15099;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join('')], 0));
} else {
return re_frame.subs.cache_and_return(query_v,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,query_v) : handler_fn.call(null,re_frame.db.app_db,query_v)));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14574__auto___15100 = re_frame.interop.now();
var duration__14575__auto___15101 = (end__14574__auto___15100 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__15056_15102 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__15057_15103 = null;
var count__15058_15104 = (0);
var i__15059_15105 = (0);
while(true){
if((i__15059_15105 < count__15058_15104)){
var vec__15060_15106 = chunk__15057_15103.cljs$core$IIndexed$_nth$arity$2(null,i__15059_15105);
var k__14576__auto___15107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15060_15106,(0),null);
var cb__14577__auto___15108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15060_15106,(1),null);
try{var G__15064_15109 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14575__auto___15101,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14577__auto___15108.cljs$core$IFn$_invoke$arity$1 ? cb__14577__auto___15108.cljs$core$IFn$_invoke$arity$1(G__15064_15109) : cb__14577__auto___15108.call(null,G__15064_15109));
}catch (e15063){if((e15063 instanceof java.lang.Exception)){
var e__14578__auto___15110 = e15063;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14576__auto___15107,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14578__auto___15110], 0));
} else {
throw e15063;

}
}
var G__15111 = seq__15056_15102;
var G__15112 = chunk__15057_15103;
var G__15113 = count__15058_15104;
var G__15114 = (i__15059_15105 + (1));
seq__15056_15102 = G__15111;
chunk__15057_15103 = G__15112;
count__15058_15104 = G__15113;
i__15059_15105 = G__15114;
continue;
} else {
var temp__4657__auto___15115 = cljs.core.seq(seq__15056_15102);
if(temp__4657__auto___15115){
var seq__15056_15116__$1 = temp__4657__auto___15115;
if(cljs.core.chunked_seq_QMARK_(seq__15056_15116__$1)){
var c__8034__auto___15117 = cljs.core.chunk_first(seq__15056_15116__$1);
var G__15118 = cljs.core.chunk_rest(seq__15056_15116__$1);
var G__15119 = c__8034__auto___15117;
var G__15120 = cljs.core.count(c__8034__auto___15117);
var G__15121 = (0);
seq__15056_15102 = G__15118;
chunk__15057_15103 = G__15119;
count__15058_15104 = G__15120;
i__15059_15105 = G__15121;
continue;
} else {
var vec__15065_15122 = cljs.core.first(seq__15056_15116__$1);
var k__14576__auto___15123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15065_15122,(0),null);
var cb__14577__auto___15124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15065_15122,(1),null);
try{var G__15069_15125 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14575__auto___15101,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14577__auto___15124.cljs$core$IFn$_invoke$arity$1 ? cb__14577__auto___15124.cljs$core$IFn$_invoke$arity$1(G__15069_15125) : cb__14577__auto___15124.call(null,G__15069_15125));
}catch (e15068){if((e15068 instanceof java.lang.Exception)){
var e__14578__auto___15126 = e15068;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14576__auto___15123,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14578__auto___15126], 0));
} else {
throw e15068;

}
}
var G__15127 = cljs.core.next(seq__15056_15116__$1);
var G__15128 = null;
var G__15129 = (0);
var G__15130 = (0);
seq__15056_15102 = G__15127;
chunk__15057_15103 = G__15128;
count__15058_15104 = G__15129;
i__15059_15105 = G__15130;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_15055;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14591__auto___15131 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14591__auto___15131;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query_v);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14591__auto___15132 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14591__auto___15132;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14591__auto___15133 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14591__auto___15133;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join('')], 0));
} else {
return re_frame.subs.cache_and_return(query_v,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,query_v) : handler_fn.call(null,re_frame.db.app_db,query_v)));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (v,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_15070 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(v),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_create,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,v,cljs.core.cst$kw$dyn_DASH_v,dynv], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14591__auto___15134 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14591__auto___15134;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(v);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14591__auto___15135 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14591__auto___15135;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___15136 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___15136)){
var not_reactive_15137 = temp__4657__auto___15136;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.array_seq(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_15137], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14591__auto___15138 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14591__auto___15138;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join('')], 0));
} else {
var dyn_vals = re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_15070){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_15070))
);
var sub = re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_15070){
return (function (){
var G__15085 = re_frame.db.app_db;
var G__15086 = v;
var G__15087 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dyn_vals) : cljs.core.deref.call(null,dyn_vals));
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__15085,G__15086,G__15087) : handler_fn.call(null,G__15085,G__15086,G__15087));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_15070))
);
return re_frame.subs.cache_and_return(v,dynv,re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_15070){
return (function (){
var G__15088 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sub) : cljs.core.deref.call(null,sub));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15088) : cljs.core.deref.call(null,G__15088));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_15070))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14574__auto___15139 = re_frame.interop.now();
var duration__14575__auto___15140 = (end__14574__auto___15139 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__15071_15141 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__15072_15142 = null;
var count__15073_15143 = (0);
var i__15074_15144 = (0);
while(true){
if((i__15074_15144 < count__15073_15143)){
var vec__15075_15145 = chunk__15072_15142.cljs$core$IIndexed$_nth$arity$2(null,i__15074_15144);
var k__14576__auto___15146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15075_15145,(0),null);
var cb__14577__auto___15147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15075_15145,(1),null);
try{var G__15079_15148 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14575__auto___15140,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14577__auto___15147.cljs$core$IFn$_invoke$arity$1 ? cb__14577__auto___15147.cljs$core$IFn$_invoke$arity$1(G__15079_15148) : cb__14577__auto___15147.call(null,G__15079_15148));
}catch (e15078){if((e15078 instanceof java.lang.Exception)){
var e__14578__auto___15149 = e15078;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14576__auto___15146,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14578__auto___15149], 0));
} else {
throw e15078;

}
}
var G__15150 = seq__15071_15141;
var G__15151 = chunk__15072_15142;
var G__15152 = count__15073_15143;
var G__15153 = (i__15074_15144 + (1));
seq__15071_15141 = G__15150;
chunk__15072_15142 = G__15151;
count__15073_15143 = G__15152;
i__15074_15144 = G__15153;
continue;
} else {
var temp__4657__auto___15154 = cljs.core.seq(seq__15071_15141);
if(temp__4657__auto___15154){
var seq__15071_15155__$1 = temp__4657__auto___15154;
if(cljs.core.chunked_seq_QMARK_(seq__15071_15155__$1)){
var c__8034__auto___15156 = cljs.core.chunk_first(seq__15071_15155__$1);
var G__15157 = cljs.core.chunk_rest(seq__15071_15155__$1);
var G__15158 = c__8034__auto___15156;
var G__15159 = cljs.core.count(c__8034__auto___15156);
var G__15160 = (0);
seq__15071_15141 = G__15157;
chunk__15072_15142 = G__15158;
count__15073_15143 = G__15159;
i__15074_15144 = G__15160;
continue;
} else {
var vec__15080_15161 = cljs.core.first(seq__15071_15155__$1);
var k__14576__auto___15162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15080_15161,(0),null);
var cb__14577__auto___15163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15080_15161,(1),null);
try{var G__15084_15164 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14575__auto___15140,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14577__auto___15163.cljs$core$IFn$_invoke$arity$1 ? cb__14577__auto___15163.cljs$core$IFn$_invoke$arity$1(G__15084_15164) : cb__14577__auto___15163.call(null,G__15084_15164));
}catch (e15083){if((e15083 instanceof java.lang.Exception)){
var e__14578__auto___15165 = e15083;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14576__auto___15162,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14578__auto___15165], 0));
} else {
throw e15083;

}
}
var G__15166 = cljs.core.next(seq__15071_15155__$1);
var G__15167 = null;
var G__15168 = (0);
var G__15169 = (0);
seq__15071_15141 = G__15166;
chunk__15072_15142 = G__15167;
count__15073_15143 = G__15168;
i__15074_15144 = G__15169;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_15070;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14591__auto___15170 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14591__auto___15170;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(v);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14591__auto___15171 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14591__auto___15171;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___15172 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___15172)){
var not_reactive_15173 = temp__4657__auto___15172;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.array_seq(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_15173], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14591__auto___15174 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14591__auto___15174;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join('')], 0));
} else {
var dyn_vals = re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__))
);
var sub = re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__4655__auto__){
return (function (){
var G__15089 = re_frame.db.app_db;
var G__15090 = v;
var G__15091 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dyn_vals) : cljs.core.deref.call(null,dyn_vals));
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__15089,G__15090,G__15091) : handler_fn.call(null,G__15089,G__15090,G__15091));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return re_frame.subs.cache_and_return(v,dynv,re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
var G__15092 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sub) : cljs.core.deref.call(null,sub));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15092) : cljs.core.deref.call(null,G__15092));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__))
));
}
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(m),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__15179){
var vec__15180 = p__15179;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15180,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15180,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_(signals))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,signals):((cljs.core.map_QMARK_(signals))?re_frame.subs.map_vals(cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_(signals))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(signals) : cljs.core.deref.call(null,signals)):re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals], 0))
)));
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__14591__auto___15183 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_signals,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_signals,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,signals__$1)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__14591__auto___15183;

} else {
}

return signals__$1;
});
/**
 * Associate the given `query id` with a handler function and an optional signal function.
 * 
 *   There's 3 ways this function can be called
 * 
 *   1. (reg-sub
 *     :test-sub
 *     (fn [db [_]] db))
 *   The value in app-db is passed to the computation function as the 1st argument.
 * 
 *   2. (reg-sub
 *     :a-b-sub
 *     (fn [q-vec d-vec]
 *       [(subs/subscribe [:a-sub])
 *        (subs/subscribe [:b-sub])])
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   Two functions provided. The 2nd is computation function, as before. The 1st
 *   is returns what `input signals` should be provided to the computation. The
 *   `input signals` function is called with two arguments: the query vector
 *   and the dynamic vector. The return value can be singleton reaction or
 *   a sequence of reactions.
 * 
 *   3. (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))```
 *   This 3rd variation is just syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. `:<-` is supplied followed by the subscription
 *   vector.
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__8335__auto__ = [];
var len__8328__auto___15275 = arguments.length;
var i__8329__auto___15276 = (0);
while(true){
if((i__8329__auto___15276 < len__8328__auto___15275)){
args__8335__auto__.push((arguments[i__8329__auto___15276]));

var G__15277 = (i__8329__auto___15276 + (1));
i__8329__auto___15276 = G__15277;
continue;
} else {
}
break;
}

var argseq__8336__auto__ = ((((1) < args__8335__auto__.length))?(new cljs.core.IndexedSeq(args__8335__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8336__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last(args);
var input_args = cljs.core.butlast(args);
var err_header = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: reg-sub for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", ")].join('');
var inputs_fn = (function (){var G__15186 = cljs.core.count(input_args);
switch (G__15186) {
case (0):
return ((function (G__15186,computation_fn,input_args,err_header){
return (function() {
var G__15279 = null;
var G__15279__1 = (function (_){
return re_frame.db.app_db;
});
var G__15279__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__15279 = function(_,___$1){
switch(arguments.length){
case 1:
return G__15279__1.call(this,_);
case 2:
return G__15279__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__15279.cljs$core$IFn$_invoke$arity$1 = G__15279__1;
G__15279.cljs$core$IFn$_invoke$arity$2 = G__15279__2;
return G__15279;
})()
;})(G__15186,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first(input_args);
if(cljs.core.fn_QMARK_(f)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([err_header,"2nd argument expected to be an inputs function, got:",f], 0));
}

return f;

break;
case (2):
return ((function (G__15186,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(cljs.core.second(input_args));
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(cljs.core.second(input_args));
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(G__15186,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input_args);
var vecs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pairs);
if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,vecs)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq([err_header,"expected pairs of :<- and vectors, got:",pairs], 0));
}

return ((function (pairs,vecs,G__15186,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,vecs,G__15186,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler(re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$1 ? inputs_fn.cljs$core$IFn$_invoke$arity$1(query_vec) : inputs_fn.call(null,query_vec));
var reaction_id = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var reaction = re_frame.interop.make_reaction(((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_15231 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_vec),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_run,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query_vec,cljs.core.cst$kw$reaction,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reaction_id) : cljs.core.deref.call(null,reaction_id))], null)], null));

try{try{var G__15246 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__15247 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__15246,G__15247) : computation_fn.call(null,G__15246,G__15247));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14574__auto___15280 = re_frame.interop.now();
var duration__14575__auto___15281 = (end__14574__auto___15280 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__15232_15282 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__15233_15283 = null;
var count__15234_15284 = (0);
var i__15235_15285 = (0);
while(true){
if((i__15235_15285 < count__15234_15284)){
var vec__15236_15286 = chunk__15233_15283.cljs$core$IIndexed$_nth$arity$2(null,i__15235_15285);
var k__14576__auto___15287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15236_15286,(0),null);
var cb__14577__auto___15288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15236_15286,(1),null);
try{var G__15240_15289 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14575__auto___15281,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14577__auto___15288.cljs$core$IFn$_invoke$arity$1 ? cb__14577__auto___15288.cljs$core$IFn$_invoke$arity$1(G__15240_15289) : cb__14577__auto___15288.call(null,G__15240_15289));
}catch (e15239){if((e15239 instanceof java.lang.Exception)){
var e__14578__auto___15290 = e15239;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14576__auto___15287,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14578__auto___15290], 0));
} else {
throw e15239;

}
}
var G__15291 = seq__15232_15282;
var G__15292 = chunk__15233_15283;
var G__15293 = count__15234_15284;
var G__15294 = (i__15235_15285 + (1));
seq__15232_15282 = G__15291;
chunk__15233_15283 = G__15292;
count__15234_15284 = G__15293;
i__15235_15285 = G__15294;
continue;
} else {
var temp__4657__auto___15295 = cljs.core.seq(seq__15232_15282);
if(temp__4657__auto___15295){
var seq__15232_15296__$1 = temp__4657__auto___15295;
if(cljs.core.chunked_seq_QMARK_(seq__15232_15296__$1)){
var c__8034__auto___15297 = cljs.core.chunk_first(seq__15232_15296__$1);
var G__15298 = cljs.core.chunk_rest(seq__15232_15296__$1);
var G__15299 = c__8034__auto___15297;
var G__15300 = cljs.core.count(c__8034__auto___15297);
var G__15301 = (0);
seq__15232_15282 = G__15298;
chunk__15233_15283 = G__15299;
count__15234_15284 = G__15300;
i__15235_15285 = G__15301;
continue;
} else {
var vec__15241_15302 = cljs.core.first(seq__15232_15296__$1);
var k__14576__auto___15303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15241_15302,(0),null);
var cb__14577__auto___15304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15241_15302,(1),null);
try{var G__15245_15305 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14575__auto___15281,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14577__auto___15304.cljs$core$IFn$_invoke$arity$1 ? cb__14577__auto___15304.cljs$core$IFn$_invoke$arity$1(G__15245_15305) : cb__14577__auto___15304.call(null,G__15245_15305));
}catch (e15244){if((e15244 instanceof java.lang.Exception)){
var e__14578__auto___15306 = e15244;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14576__auto___15303,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14578__auto___15306], 0));
} else {
throw e15244;

}
}
var G__15307 = cljs.core.next(seq__15232_15296__$1);
var G__15308 = null;
var G__15309 = (0);
var G__15310 = (0);
seq__15232_15282 = G__15307;
chunk__15233_15283 = G__15308;
count__15234_15284 = G__15309;
i__15235_15285 = G__15310;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_15231;
}} else {
var G__15248 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__15249 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__15248,G__15249) : computation_fn.call(null,G__15248,G__15249));
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
var G__15250_15311 = reaction_id;
var G__15251_15312 = re_frame.interop.reagent_id(reaction);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15250_15311,G__15251_15312) : cljs.core.reset_BANG_.call(null,G__15250_15311,G__15251_15312));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(query_vec,dyn_vec) : inputs_fn.call(null,query_vec,dyn_vec));
var reaction_id = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var reaction = re_frame.interop.make_reaction(((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_15252 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_vec),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_run,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query_DASH_v,query_vec,cljs.core.cst$kw$dyn_DASH_v,dyn_vec,cljs.core.cst$kw$reaction,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reaction_id) : cljs.core.deref.call(null,reaction_id))], null)], null));

try{try{var G__15267 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__15268 = query_vec;
var G__15269 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__15267,G__15268,G__15269) : computation_fn.call(null,G__15267,G__15268,G__15269));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14574__auto___15313 = re_frame.interop.now();
var duration__14575__auto___15314 = (end__14574__auto___15313 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__15253_15315 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.trace.trace_cbs) : cljs.core.deref.call(null,re_frame.trace.trace_cbs)));
var chunk__15254_15316 = null;
var count__15255_15317 = (0);
var i__15256_15318 = (0);
while(true){
if((i__15256_15318 < count__15255_15317)){
var vec__15257_15319 = chunk__15254_15316.cljs$core$IIndexed$_nth$arity$2(null,i__15256_15318);
var k__14576__auto___15320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15257_15319,(0),null);
var cb__14577__auto___15321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15257_15319,(1),null);
try{var G__15261_15322 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14575__auto___15314,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14577__auto___15321.cljs$core$IFn$_invoke$arity$1 ? cb__14577__auto___15321.cljs$core$IFn$_invoke$arity$1(G__15261_15322) : cb__14577__auto___15321.call(null,G__15261_15322));
}catch (e15260){if((e15260 instanceof java.lang.Exception)){
var e__14578__auto___15323 = e15260;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14576__auto___15320,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14578__auto___15323], 0));
} else {
throw e15260;

}
}
var G__15324 = seq__15253_15315;
var G__15325 = chunk__15254_15316;
var G__15326 = count__15255_15317;
var G__15327 = (i__15256_15318 + (1));
seq__15253_15315 = G__15324;
chunk__15254_15316 = G__15325;
count__15255_15317 = G__15326;
i__15256_15318 = G__15327;
continue;
} else {
var temp__4657__auto___15328 = cljs.core.seq(seq__15253_15315);
if(temp__4657__auto___15328){
var seq__15253_15329__$1 = temp__4657__auto___15328;
if(cljs.core.chunked_seq_QMARK_(seq__15253_15329__$1)){
var c__8034__auto___15330 = cljs.core.chunk_first(seq__15253_15329__$1);
var G__15331 = cljs.core.chunk_rest(seq__15253_15329__$1);
var G__15332 = c__8034__auto___15330;
var G__15333 = cljs.core.count(c__8034__auto___15330);
var G__15334 = (0);
seq__15253_15315 = G__15331;
chunk__15254_15316 = G__15332;
count__15255_15317 = G__15333;
i__15256_15318 = G__15334;
continue;
} else {
var vec__15262_15335 = cljs.core.first(seq__15253_15329__$1);
var k__14576__auto___15336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15262_15335,(0),null);
var cb__14577__auto___15337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15262_15335,(1),null);
try{var G__15266_15338 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14575__auto___15314,cljs.core.array_seq([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__14577__auto___15337.cljs$core$IFn$_invoke$arity$1 ? cb__14577__auto___15337.cljs$core$IFn$_invoke$arity$1(G__15266_15338) : cb__14577__auto___15337.call(null,G__15266_15338));
}catch (e15265){if((e15265 instanceof java.lang.Exception)){
var e__14578__auto___15339 = e15265;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["Error thrown from trace cb",k__14576__auto___15336,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__14578__auto___15339], 0));
} else {
throw e15265;

}
}
var G__15340 = cljs.core.next(seq__15253_15329__$1);
var G__15341 = null;
var G__15342 = (0);
var G__15343 = (0);
seq__15253_15315 = G__15340;
chunk__15254_15316 = G__15341;
count__15255_15317 = G__15342;
i__15256_15318 = G__15343;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_15252;
}} else {
var G__15270 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__15271 = query_vec;
var G__15272 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__15270,G__15271,G__15272) : computation_fn.call(null,G__15270,G__15271,G__15272));
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
var G__15273_15344 = reaction_id;
var G__15274_15345 = re_frame.interop.reagent_id(reaction);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15273_15344,G__15274_15345) : cljs.core.reset_BANG_.call(null,G__15273_15344,G__15274_15345));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq15184){
var G__15185 = cljs.core.first(seq15184);
var seq15184__$1 = cljs.core.next(seq15184);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__15185,seq15184__$1);
});

