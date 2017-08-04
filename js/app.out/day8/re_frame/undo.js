// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('day8.re_frame.undo');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_frame.db');
day8.re_frame.undo.config = (function (){var G__15433 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$max_DASH_undos,(50),cljs.core.cst$kw$harvest_DASH_fn,cljs.core.deref,cljs.core.cst$kw$reinstate_DASH_fn,cljs.core.reset_BANG_], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15433) : cljs.core.atom.call(null,G__15433));
})();
/**
 * Set configuration parameters for library.
 * 
 *   Should be called on app startup.
 */
day8.re_frame.undo.undo_config_BANG_ = (function day8$re_frame$undo$undo_config_BANG_(new_config){
var temp__4655__auto__ = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(new_config)),cljs.core.set(cljs.core.keys((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(day8.re_frame.undo.config) : cljs.core.deref.call(null,day8.re_frame.undo.config))))));
if(temp__4655__auto__){
var unknown_keys = temp__4655__auto__;
var G__15437 = cljs.core.cst$kw$error;
var G__15438 = "re-frame-undo: undo-config! called within unknown keys: ";
var G__15439 = unknown_keys;
return (re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__15437,G__15438,G__15439) : re_frame.core.console.call(null,G__15437,G__15438,G__15439));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame.undo.config,cljs.core.merge,new_config);
}
});
day8.re_frame.undo.max_undos = (function day8$re_frame$undo$max_undos(){
return cljs.core.cst$kw$max_DASH_undos.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(day8.re_frame.undo.config) : cljs.core.deref.call(null,day8.re_frame.undo.config)));
});
/**
 * A list of history states
 */
day8.re_frame.undo.undo_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
/**
 * A list of future states, caused by undoing
 */
day8.re_frame.undo.redo_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
/**
 * Mirrors app-db
 */
day8.re_frame.undo.app_explain = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
/**
 * Mirrors undo-list
 */
day8.re_frame.undo.undo_explain_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
/**
 * Mirrors redo-list
 */
day8.re_frame.undo.redo_explain_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
day8.re_frame.undo.clear_undos_BANG_ = (function day8$re_frame$undo$clear_undos_BANG_(){
var G__15444_15448 = day8.re_frame.undo.undo_list;
var G__15445_15449 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15444_15448,G__15445_15449) : cljs.core.reset_BANG_.call(null,G__15444_15448,G__15445_15449));

var G__15446 = day8.re_frame.undo.undo_explain_list;
var G__15447 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15446,G__15447) : cljs.core.reset_BANG_.call(null,G__15446,G__15447));
});
day8.re_frame.undo.clear_redos_BANG_ = (function day8$re_frame$undo$clear_redos_BANG_(){
var G__15454_15458 = day8.re_frame.undo.redo_list;
var G__15455_15459 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15454_15458,G__15455_15459) : cljs.core.reset_BANG_.call(null,G__15454_15458,G__15455_15459));

var G__15456 = day8.re_frame.undo.redo_explain_list;
var G__15457 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15456,G__15457) : cljs.core.reset_BANG_.call(null,G__15456,G__15457));
});
day8.re_frame.undo.clear_history_BANG_ = (function day8$re_frame$undo$clear_history_BANG_(){
day8.re_frame.undo.clear_undos_BANG_();

day8.re_frame.undo.clear_redos_BANG_();

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame.undo.app_explain,"") : cljs.core.reset_BANG_.call(null,day8.re_frame.undo.app_explain,""));
});
/**
 * Stores the value currently in app-db, so the user can later undo
 */
day8.re_frame.undo.store_now_BANG_ = (function day8$re_frame$undo$store_now_BANG_(explanation){
day8.re_frame.undo.clear_redos_BANG_();

var G__15464_15468 = day8.re_frame.undo.undo_list;
var G__15465_15469 = cljs.core.vec(cljs.core.take_last(day8.re_frame.undo.max_undos(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(day8.re_frame.undo.undo_list) : cljs.core.deref.call(null,day8.re_frame.undo.undo_list)),cljs.core.cst$kw$harvest_DASH_fn.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(day8.re_frame.undo.config) : cljs.core.deref.call(null,day8.re_frame.undo.config))).call(null,re_frame.db.app_db))));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15464_15468,G__15465_15469) : cljs.core.reset_BANG_.call(null,G__15464_15468,G__15465_15469));

var G__15466_15470 = day8.re_frame.undo.undo_explain_list;
var G__15467_15471 = cljs.core.vec(cljs.core.take_last(day8.re_frame.undo.max_undos(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(day8.re_frame.undo.undo_explain_list) : cljs.core.deref.call(null,day8.re_frame.undo.undo_explain_list)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(day8.re_frame.undo.app_explain) : cljs.core.deref.call(null,day8.re_frame.undo.app_explain)))));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15466_15470,G__15467_15471) : cljs.core.reset_BANG_.call(null,G__15466_15470,G__15467_15471));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame.undo.app_explain,explanation) : cljs.core.reset_BANG_.call(null,day8.re_frame.undo.app_explain,explanation));
});
/**
 * Returns true if undos exist, false otherwise
 */
day8.re_frame.undo.undos_QMARK_ = (function day8$re_frame$undo$undos_QMARK_(){
return cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(day8.re_frame.undo.undo_list) : cljs.core.deref.call(null,day8.re_frame.undo.undo_list)));
});
/**
 * Returns true if redos exist, false otherwise
 */
day8.re_frame.undo.redos_QMARK_ = (function day8$re_frame$undo$redos_QMARK_(){
return cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(day8.re_frame.undo.redo_list) : cljs.core.deref.call(null,day8.re_frame.undo.redo_list)));
});
/**
 * Returns a vector of undo descriptions, perhaps empty
 */
day8.re_frame.undo.undo_explanations = (function day8$re_frame$undo$undo_explanations(){
if(cljs.core.truth_(day8.re_frame.undo.undos_QMARK_())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(day8.re_frame.undo.undo_explain_list) : cljs.core.deref.call(null,day8.re_frame.undo.undo_explain_list)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(day8.re_frame.undo.app_explain) : cljs.core.deref.call(null,day8.re_frame.undo.app_explain)));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
re_frame.core.reg_sub_raw(cljs.core.cst$kw$undos_QMARK_,(function day8$re_frame$undo$handler(_,___$1){
return reagent.ratom.make_reaction((function (){
return day8.re_frame.undo.undos_QMARK_();
}));
}));
re_frame.core.reg_sub_raw(cljs.core.cst$kw$redos_QMARK_,(function day8$re_frame$undo$handler(_,___$1){
return reagent.ratom.make_reaction((function (){
return day8.re_frame.undo.redos_QMARK_();
}));
}));
re_frame.core.reg_sub_raw(cljs.core.cst$kw$undo_DASH_explanations,(function day8$re_frame$undo$handler(_,___$1){
return reagent.ratom.make_reaction((function (){
return day8.re_frame.undo.undo_explanations();
}));
}));
re_frame.core.reg_sub_raw(cljs.core.cst$kw$redo_DASH_explanations,(function day8$re_frame$undo$handler(_,___$1){
return reagent.ratom.make_reaction((function (){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(day8.re_frame.undo.redo_explain_list) : cljs.core.deref.call(null,day8.re_frame.undo.redo_explain_list));
}));
}));
day8.re_frame.undo.undo = (function day8$re_frame$undo$undo(harvester,reinstater,undos,cur,redos){
var u = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(undos) : cljs.core.deref.call(null,undos));
var r = cljs.core.cons((harvester.cljs$core$IFn$_invoke$arity$1 ? harvester.cljs$core$IFn$_invoke$arity$1(cur) : harvester.call(null,cur)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(redos) : cljs.core.deref.call(null,redos)));
var G__15476_15480 = cur;
var G__15477_15481 = cljs.core.last(u);
(reinstater.cljs$core$IFn$_invoke$arity$2 ? reinstater.cljs$core$IFn$_invoke$arity$2(G__15476_15480,G__15477_15481) : reinstater.call(null,G__15476_15480,G__15477_15481));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(redos,r) : cljs.core.reset_BANG_.call(null,redos,r));

var G__15478 = undos;
var G__15479 = cljs.core.pop(u);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15478,G__15479) : cljs.core.reset_BANG_.call(null,G__15478,G__15479));
});
/**
 * undo n steps or until we run out of undos
 */
day8.re_frame.undo.undo_n = (function day8$re_frame$undo$undo_n(n){
while(true){
if(cljs.core.truth_((function (){var and__7203__auto__ = (n > (0));
if(and__7203__auto__){
return day8.re_frame.undo.undos_QMARK_();
} else {
return and__7203__auto__;
}
})())){
day8.re_frame.undo.undo(cljs.core.cst$kw$harvest_DASH_fn.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(day8.re_frame.undo.config) : cljs.core.deref.call(null,day8.re_frame.undo.config))),cljs.core.cst$kw$reinstate_DASH_fn.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(day8.re_frame.undo.config) : cljs.core.deref.call(null,day8.re_frame.undo.config))),day8.re_frame.undo.undo_list,re_frame.db.app_db,day8.re_frame.undo.redo_list);

day8.re_frame.undo.undo(cljs.core.deref,cljs.core.reset_BANG_,day8.re_frame.undo.undo_explain_list,day8.re_frame.undo.app_explain,day8.re_frame.undo.redo_explain_list);

var G__15482 = (n - (1));
n = G__15482;
continue;
} else {
return null;
}
break;
}
});
day8.re_frame.undo.undo_handler = (function day8$re_frame$undo$undo_handler(_,p__15483){
var vec__15489 = p__15483;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15489,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15489,(1),null);
if(cljs.core.not(day8.re_frame.undo.undos_QMARK_())){
var G__15492_15494 = cljs.core.cst$kw$warn;
var G__15493_15495 = "re-frame: you did a (dispatch [:undo]), but there is nothing to undo.";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$2(G__15492_15494,G__15493_15495) : re_frame.core.console.call(null,G__15492_15494,G__15493_15495));
} else {
day8.re_frame.undo.undo_n((function (){var or__7215__auto__ = n;
if(cljs.core.truth_(or__7215__auto__)){
return or__7215__auto__;
} else {
return (1);
}
})());
}

return cljs.core.PersistentArrayMap.EMPTY;
});
day8.re_frame.undo.redo = (function day8$re_frame$undo$redo(harvester,reinstater,undos,cur,redos){
var u = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(undos) : cljs.core.deref.call(null,undos)),(harvester.cljs$core$IFn$_invoke$arity$1 ? harvester.cljs$core$IFn$_invoke$arity$1(cur) : harvester.call(null,cur)));
var r = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(redos) : cljs.core.deref.call(null,redos));
var G__15500_15504 = cur;
var G__15501_15505 = cljs.core.first(r);
(reinstater.cljs$core$IFn$_invoke$arity$2 ? reinstater.cljs$core$IFn$_invoke$arity$2(G__15500_15504,G__15501_15505) : reinstater.call(null,G__15500_15504,G__15501_15505));

var G__15502_15506 = redos;
var G__15503_15507 = cljs.core.rest(r);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15502_15506,G__15503_15507) : cljs.core.reset_BANG_.call(null,G__15502_15506,G__15503_15507));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(undos,u) : cljs.core.reset_BANG_.call(null,undos,u));
});
/**
 * redo n steps or until we run out of redos
 */
day8.re_frame.undo.redo_n = (function day8$re_frame$undo$redo_n(n){
while(true){
if(cljs.core.truth_((function (){var and__7203__auto__ = (n > (0));
if(and__7203__auto__){
return day8.re_frame.undo.redos_QMARK_();
} else {
return and__7203__auto__;
}
})())){
day8.re_frame.undo.redo(cljs.core.cst$kw$harvest_DASH_fn.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(day8.re_frame.undo.config) : cljs.core.deref.call(null,day8.re_frame.undo.config))),cljs.core.cst$kw$reinstate_DASH_fn.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(day8.re_frame.undo.config) : cljs.core.deref.call(null,day8.re_frame.undo.config))),day8.re_frame.undo.undo_list,re_frame.db.app_db,day8.re_frame.undo.redo_list);

day8.re_frame.undo.redo(cljs.core.deref,cljs.core.reset_BANG_,day8.re_frame.undo.undo_explain_list,day8.re_frame.undo.app_explain,day8.re_frame.undo.redo_explain_list);

var G__15508 = (n - (1));
n = G__15508;
continue;
} else {
return null;
}
break;
}
});
day8.re_frame.undo.redo_handler = (function day8$re_frame$undo$redo_handler(_,p__15509){
var vec__15515 = p__15509;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15515,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15515,(1),null);
if(cljs.core.not(day8.re_frame.undo.redos_QMARK_())){
var G__15518_15520 = cljs.core.cst$kw$warn;
var G__15519_15521 = "re-frame: you did a (dispatch [:redo]), but there is nothing to redo.";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$2(G__15518_15520,G__15519_15521) : re_frame.core.console.call(null,G__15518_15520,G__15519_15521));
} else {
day8.re_frame.undo.redo_n((function (){var or__7215__auto__ = n;
if(cljs.core.truth_(or__7215__auto__)){
return or__7215__auto__;
} else {
return (1);
}
})());
}

return cljs.core.PersistentArrayMap.EMPTY;
});
day8.re_frame.undo.purge_redo_handler = (function day8$re_frame$undo$purge_redo_handler(db,_){
if(cljs.core.not(day8.re_frame.undo.redos_QMARK_())){
var G__15524_15526 = cljs.core.cst$kw$warn;
var G__15525_15527 = "re-frame: you did a (dispatch [:purge-redos]), but there is nothing to redo.";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$2(G__15524_15526,G__15525_15527) : re_frame.core.console.call(null,G__15524_15526,G__15525_15527));
} else {
day8.re_frame.undo.clear_redos_BANG_();
}

return db;
});
/**
 * returns a side-effecting Interceptor, which stores an undo checkpoint in
 *   `:after` processing.
 * If the `:effect` cotnains an `:undo` key, then use the explanation provided
 * by it. Otherwise, `explanation` can be:
 *   - a string (of explanation)
 *   - a function expected to return a string of explanation. It will be called
 *     with two arguments: `db` and `event-vec`.
 *   - a nil, in which case "" is recorded as the explanation
 *   
 */
day8.re_frame.undo.undoable = (function day8$re_frame$undo$undoable(var_args){
var args15528 = [];
var len__8328__auto___15548 = arguments.length;
var i__8329__auto___15549 = (0);
while(true){
if((i__8329__auto___15549 < len__8328__auto___15548)){
args15528.push((arguments[i__8329__auto___15549]));

var G__15550 = (i__8329__auto___15549 + (1));
i__8329__auto___15549 = G__15550;
continue;
} else {
}
break;
}

var G__15530 = args15528.length;
switch (G__15530) {
case 0:
return day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15528.length)].join('')));

}
});

day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$0 = (function (){
return day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1(null);
});

day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1 = (function (explanation){
var G__15531 = cljs.core.cst$kw$id;
var G__15532 = cljs.core.cst$kw$undoable;
var G__15533 = cljs.core.cst$kw$after;
var G__15534 = ((function (G__15531,G__15532,G__15533){
return (function (context){
var event = (function (){var G__15535 = context;
var G__15536 = cljs.core.cst$kw$event;
return (re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2(G__15535,G__15536) : re_frame.core.get_coeffect.call(null,G__15535,G__15536));
})();
var undo_effect = (function (){var G__15537 = context;
var G__15538 = cljs.core.cst$kw$undo;
return (re_frame.core.get_effect.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.get_effect.cljs$core$IFn$_invoke$arity$2(G__15537,G__15538) : re_frame.core.get_effect.call(null,G__15537,G__15538));
})();
var explanation__$1 = ((!((undo_effect == null)))?undo_effect:((cljs.core.fn_QMARK_(explanation))?(function (){var G__15539 = (function (){var G__15541 = context;
var G__15542 = cljs.core.cst$kw$db;
return (re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2(G__15541,G__15542) : re_frame.core.get_coeffect.call(null,G__15541,G__15542));
})();
var G__15540 = event;
return (explanation.cljs$core$IFn$_invoke$arity$2 ? explanation.cljs$core$IFn$_invoke$arity$2(G__15539,G__15540) : explanation.call(null,G__15539,G__15540));
})():((typeof explanation === 'string')?explanation:(((explanation == null))?"":(function (){var G__15543 = cljs.core.cst$kw$error;
var G__15544 = "re-frame-undo: \"undoable\" interceptor on event ";
var G__15545 = event;
var G__15546 = " given a bad parameter. Got: ";
var G__15547 = explanation;
return (re_frame.core.console.cljs$core$IFn$_invoke$arity$5 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$5(G__15543,G__15544,G__15545,G__15546,G__15547) : re_frame.core.console.call(null,G__15543,G__15544,G__15545,G__15546,G__15547));
})()
))));
day8.re_frame.undo.store_now_BANG_(explanation__$1);

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,cljs.core.cst$kw$effects,cljs.core.dissoc,cljs.core.cst$kw$undo);
});})(G__15531,G__15532,G__15533))
;
return (re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$4(G__15531,G__15532,G__15533,G__15534) : re_frame.core.__GT_interceptor.call(null,G__15531,G__15532,G__15533,G__15534));
});

day8.re_frame.undo.undoable.cljs$lang$maxFixedArity = 1;

day8.re_frame.undo.register_events_subs_BANG_ = (function day8$re_frame$undo$register_events_subs_BANG_(){
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$undo,day8.re_frame.undo.undo_handler);

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$redo,day8.re_frame.undo.redo_handler);

return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$purge_DASH_redos,day8.re_frame.undo.purge_redo_handler);
});
day8.re_frame.undo.register_events_subs_BANG_();
