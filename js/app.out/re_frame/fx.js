// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
var seq__14756 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__14757 = null;
var count__14758 = (0);
var i__14759 = (0);
while(true){
if((i__14759 < count__14758)){
var vec__14760 = chunk__14757.cljs$core$IIndexed$_nth$arity$2(null,i__14759);
var effect_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14760,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14760,(1),null);
var temp__4655__auto___14766 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___14766)){
var effect_fn_14767 = temp__4655__auto___14766;
(effect_fn_14767.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14767.cljs$core$IFn$_invoke$arity$1(value) : effect_fn_14767.call(null,value));
} else {
}

var G__14768 = seq__14756;
var G__14769 = chunk__14757;
var G__14770 = count__14758;
var G__14771 = (i__14759 + (1));
seq__14756 = G__14768;
chunk__14757 = G__14769;
count__14758 = G__14770;
i__14759 = G__14771;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14756);
if(temp__4657__auto__){
var seq__14756__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14756__$1)){
var c__8034__auto__ = cljs.core.chunk_first(seq__14756__$1);
var G__14772 = cljs.core.chunk_rest(seq__14756__$1);
var G__14773 = c__8034__auto__;
var G__14774 = cljs.core.count(c__8034__auto__);
var G__14775 = (0);
seq__14756 = G__14772;
chunk__14757 = G__14773;
count__14758 = G__14774;
i__14759 = G__14775;
continue;
} else {
var vec__14763 = cljs.core.first(seq__14756__$1);
var effect_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14763,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14763,(1),null);
var temp__4655__auto___14776 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___14776)){
var effect_fn_14777 = temp__4655__auto___14776;
(effect_fn_14777.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14777.cljs$core$IFn$_invoke$arity$1(value) : effect_fn_14777.call(null,value));
} else {
}

var G__14778 = cljs.core.next(seq__14756__$1);
var G__14779 = null;
var G__14780 = (0);
var G__14781 = (0);
seq__14756 = G__14778;
chunk__14757 = G__14779;
count__14758 = G__14780;
i__14759 = G__14781;
continue;
}
} else {
return null;
}
}
break;
}
})], 0));
var G__14782_14792 = cljs.core.cst$kw$dispatch_DASH_later;
var G__14783_14793 = ((function (G__14782_14792){
return (function (value){
var seq__14784 = cljs.core.seq(value);
var chunk__14785 = null;
var count__14786 = (0);
var i__14787 = (0);
while(true){
if((i__14787 < count__14786)){
var map__14788 = chunk__14785.cljs$core$IIndexed$_nth$arity$2(null,i__14787);
var map__14788__$1 = ((((!((map__14788 == null)))?((((map__14788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14788):map__14788);
var effect = map__14788__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14788__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14788__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__14784,chunk__14785,count__14786,i__14787,map__14788,map__14788__$1,effect,ms,dispatch,G__14782_14792){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__14784,chunk__14785,count__14786,i__14787,map__14788,map__14788__$1,effect,ms,dispatch,G__14782_14792))
,ms);
}

var G__14794 = seq__14784;
var G__14795 = chunk__14785;
var G__14796 = count__14786;
var G__14797 = (i__14787 + (1));
seq__14784 = G__14794;
chunk__14785 = G__14795;
count__14786 = G__14796;
i__14787 = G__14797;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14784);
if(temp__4657__auto__){
var seq__14784__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14784__$1)){
var c__8034__auto__ = cljs.core.chunk_first(seq__14784__$1);
var G__14798 = cljs.core.chunk_rest(seq__14784__$1);
var G__14799 = c__8034__auto__;
var G__14800 = cljs.core.count(c__8034__auto__);
var G__14801 = (0);
seq__14784 = G__14798;
chunk__14785 = G__14799;
count__14786 = G__14800;
i__14787 = G__14801;
continue;
} else {
var map__14790 = cljs.core.first(seq__14784__$1);
var map__14790__$1 = ((((!((map__14790 == null)))?((((map__14790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14790):map__14790);
var effect = map__14790__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14790__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14790__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__14784,chunk__14785,count__14786,i__14787,map__14790,map__14790__$1,effect,ms,dispatch,seq__14784__$1,temp__4657__auto__,G__14782_14792){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__14784,chunk__14785,count__14786,i__14787,map__14790,map__14790__$1,effect,ms,dispatch,seq__14784__$1,temp__4657__auto__,G__14782_14792))
,ms);
}

var G__14802 = cljs.core.next(seq__14784__$1);
var G__14803 = null;
var G__14804 = (0);
var G__14805 = (0);
seq__14784 = G__14802;
chunk__14785 = G__14803;
count__14786 = G__14804;
i__14787 = G__14805;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__14782_14792))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14782_14792,G__14783_14793) : re_frame.fx.register.call(null,G__14782_14792,G__14783_14793));
var G__14806_14808 = cljs.core.cst$kw$dispatch;
var G__14807_14809 = ((function (G__14806_14808){
return (function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
});})(G__14806_14808))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14806_14808,G__14807_14809) : re_frame.fx.register.call(null,G__14806_14808,G__14807_14809));
var G__14810_14816 = cljs.core.cst$kw$dispatch_DASH_n;
var G__14811_14817 = ((function (G__14810_14816){
return (function (value){
if(!(cljs.core.sequential_QMARK_(value))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
}

var seq__14812 = cljs.core.seq(value);
var chunk__14813 = null;
var count__14814 = (0);
var i__14815 = (0);
while(true){
if((i__14815 < count__14814)){
var event = chunk__14813.cljs$core$IIndexed$_nth$arity$2(null,i__14815);
re_frame.router.dispatch(event);

var G__14818 = seq__14812;
var G__14819 = chunk__14813;
var G__14820 = count__14814;
var G__14821 = (i__14815 + (1));
seq__14812 = G__14818;
chunk__14813 = G__14819;
count__14814 = G__14820;
i__14815 = G__14821;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14812);
if(temp__4657__auto__){
var seq__14812__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14812__$1)){
var c__8034__auto__ = cljs.core.chunk_first(seq__14812__$1);
var G__14822 = cljs.core.chunk_rest(seq__14812__$1);
var G__14823 = c__8034__auto__;
var G__14824 = cljs.core.count(c__8034__auto__);
var G__14825 = (0);
seq__14812 = G__14822;
chunk__14813 = G__14823;
count__14814 = G__14824;
i__14815 = G__14825;
continue;
} else {
var event = cljs.core.first(seq__14812__$1);
re_frame.router.dispatch(event);

var G__14826 = cljs.core.next(seq__14812__$1);
var G__14827 = null;
var G__14828 = (0);
var G__14829 = (0);
seq__14812 = G__14826;
chunk__14813 = G__14827;
count__14814 = G__14828;
i__14815 = G__14829;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__14810_14816))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14810_14816,G__14811_14817) : re_frame.fx.register.call(null,G__14810_14816,G__14811_14817));
var G__14830_14836 = cljs.core.cst$kw$deregister_DASH_event_DASH_handler;
var G__14831_14837 = ((function (G__14830_14836){
return (function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__14832 = cljs.core.seq(((cljs.core.sequential_QMARK_(value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__14833 = null;
var count__14834 = (0);
var i__14835 = (0);
while(true){
if((i__14835 < count__14834)){
var event = chunk__14833.cljs$core$IIndexed$_nth$arity$2(null,i__14835);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__14838 = seq__14832;
var G__14839 = chunk__14833;
var G__14840 = count__14834;
var G__14841 = (i__14835 + (1));
seq__14832 = G__14838;
chunk__14833 = G__14839;
count__14834 = G__14840;
i__14835 = G__14841;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14832);
if(temp__4657__auto__){
var seq__14832__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14832__$1)){
var c__8034__auto__ = cljs.core.chunk_first(seq__14832__$1);
var G__14842 = cljs.core.chunk_rest(seq__14832__$1);
var G__14843 = c__8034__auto__;
var G__14844 = cljs.core.count(c__8034__auto__);
var G__14845 = (0);
seq__14832 = G__14842;
chunk__14833 = G__14843;
count__14834 = G__14844;
i__14835 = G__14845;
continue;
} else {
var event = cljs.core.first(seq__14832__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__14846 = cljs.core.next(seq__14832__$1);
var G__14847 = null;
var G__14848 = (0);
var G__14849 = (0);
seq__14832 = G__14846;
chunk__14833 = G__14847;
count__14834 = G__14848;
i__14835 = G__14849;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});})(G__14830_14836))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14830_14836,G__14831_14837) : re_frame.fx.register.call(null,G__14830_14836,G__14831_14837));
var G__14850_14852 = cljs.core.cst$kw$db;
var G__14851_14853 = ((function (G__14850_14852){
return (function (value){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,value) : cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value));
});})(G__14850_14852))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__14850_14852,G__14851_14853) : re_frame.fx.register.call(null,G__14850_14852,G__14851_14853));
