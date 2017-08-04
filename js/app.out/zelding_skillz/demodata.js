// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('zelding_skillz.demodata');
goog.require('cljs.core');
goog.require('cljs.core.constants');
zelding_skillz.demodata.gen_tags = (function zelding_skillz$demodata$gen_tags(){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.nil_QMARK_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_nth(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0425\u043E\u0436\u0434\u0435\u043D\u0438\u0435","\u0411\u0435\u0433","\u041D\u044B\u0440\u044F\u043D\u0438\u0435","\u041F\u043B\u0430\u0432\u0430\u043D\u0438\u0435",null], null)),cljs.core.rand_nth(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u041D\u0430 \u0440\u0443\u043A\u0430\u0445","\u041D\u0430 \u0433\u043E\u043B\u043E\u0432\u0435","\u041D\u0430 \u043D\u043E\u0441\u0443","\u041D\u0430 \u0441\u043F\u0438\u043D\u0435","\u041D\u0430 \u043B\u043E\u043A\u0442\u044F\u0445",null], null)),cljs.core.rand_nth(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C \u043F\u0440\u043E\u0442\u0438\u0432\u043E\u0433\u0430\u0437\u043E\u043C","\u0421 \u0442\u043E\u0440\u0442\u043E\u043C","\u0421 \u0448\u0430\u043F\u043E\u0447\u043A\u043E\u0439",null], null)),cljs.core.rand_nth(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0418\u0437 \u0444\u043E\u043B\u044C\u0433\u0438","\u0418\u0437 \u043B\u044E\u043C\u0438\u043D\u044F","\u0418\u0437 \u0437\u043E\u043B\u043E\u0442\u0430","\u0418\u0437 \u043A\u0430\u043C\u043D\u044F","\u0418\u0437 \u043D\u0430\u0432\u0435\u0441\u0430",null], null))], null));
});
zelding_skillz.demodata.gen_tags_free = (function zelding_skillz$demodata$gen_tags_free(size){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(size,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.rand_nth(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0425\u043E\u0436\u0434\u0435\u043D\u0438\u0435","\u0411\u0435\u0433","\u041D\u044B\u0440\u044F\u043D\u0438\u0435","\u041F\u043B\u0430\u0432\u0430\u043D\u0438\u0435","\u041D\u0430 \u0440\u0443\u043A\u0430\u0445","\u041D\u0430 \u0433\u043E\u043B\u043E\u0432\u0435","\u041D\u0430 \u043D\u043E\u0441\u0443","\u041D\u0430 \u0441\u043F\u0438\u043D\u0435","\u041D\u0430 \u043B\u043E\u043A\u0442\u044F\u0445","C \u043F\u0440\u043E\u0442\u0438\u0432\u043E\u0433\u0430\u0437\u043E\u043C","\u0421 \u0442\u043E\u0440\u0442\u043E\u043C","\u0421 \u0448\u0430\u043F\u043E\u0447\u043A\u043E\u0439","\u0418\u0437 \u0444\u043E\u043B\u044C\u0433\u0438","\u0418\u0437 \u043B\u044E\u043C\u0438\u043D\u044F","\u0418\u0437 \u0437\u043E\u043B\u043E\u0442\u0430","\u0418\u0437 \u043A\u0430\u043C\u043D\u044F","\u0418\u0437 \u043D\u0430\u0432\u0435\u0441\u0430"], null));
})));
});
zelding_skillz.demodata.gen_tags_placeholder = (function zelding_skillz$demodata$gen_tags_placeholder(size){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(size,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.rand_nth(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","##","###","####","####"], null));
})));
});
zelding_skillz.demodata.gen_placeholder = (function zelding_skillz$demodata$gen_placeholder(){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.rand_int((20)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("#")));
});
zelding_skillz.demodata.rand_gen = (function zelding_skillz$demodata$rand_gen(max_level){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((20),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.rand_int(max_level);
})))));
});
zelding_skillz.demodata.gen_demodata = (function zelding_skillz$demodata$gen_demodata(){
var max_level = cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$2((3),(15)));
var data_gen = zelding_skillz.demodata.rand_gen(max_level);
var tags = zelding_skillz.demodata.gen_tags_placeholder((4));
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,zelding_skillz.demodata.gen_placeholder(),cljs.core.cst$kw$max_DASH_level,max_level,cljs.core.cst$kw$tags,zelding_skillz.demodata.gen_tags_placeholder((4)),cljs.core.cst$kw$description,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("##################################3")].join(''),cljs.core.cst$kw$skill_DASH_link,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#####")].join(''),cljs.core.cst$kw$date_DASH_list,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8003__auto__ = ((function (max_level,data_gen,tags){
return (function zelding_skillz$demodata$gen_demodata_$_iter__15755(s__15756){
return (new cljs.core.LazySeq(null,((function (max_level,data_gen,tags){
return (function (){
var s__15756__$1 = s__15756;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15756__$1);
if(temp__4657__auto__){
var s__15756__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15756__$2)){
var c__8001__auto__ = cljs.core.chunk_first(s__15756__$2);
var size__8002__auto__ = cljs.core.count(c__8001__auto__);
var b__15758 = cljs.core.chunk_buffer(size__8002__auto__);
if((function (){var i__15757 = (0);
while(true){
if((i__15757 < size__8002__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8001__auto__,i__15757);
cljs.core.chunk_append(b__15758,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(i),i], null));

var G__15761 = (i__15757 + (1));
i__15757 = G__15761;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15758),zelding_skillz$demodata$gen_demodata_$_iter__15755(cljs.core.chunk_rest(s__15756__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15758),null);
}
} else {
var i = cljs.core.first(s__15756__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(i),i], null),zelding_skillz$demodata$gen_demodata_$_iter__15755(cljs.core.rest(s__15756__$2)));
}
} else {
return null;
}
break;
}
});})(max_level,data_gen,tags))
,null,null));
});})(max_level,data_gen,tags))
;
return iter__8003__auto__(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,(1),cljs.core.cst$kw$value,(0)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,(2),cljs.core.cst$kw$value,(0)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,(3),cljs.core.cst$kw$value,(0)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,(4),cljs.core.cst$kw$value,(0)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,(5),cljs.core.cst$kw$value,(0)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,(6),cljs.core.cst$kw$value,(0)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,(7),cljs.core.cst$kw$value,(0)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,(8),cljs.core.cst$kw$value,(0)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,(9),cljs.core.cst$kw$value,(0)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,(10),cljs.core.cst$kw$value,(0)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,(11),cljs.core.cst$kw$value,(0)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,(12),cljs.core.cst$kw$value,(0)], null)], null));
})())], null);
});
