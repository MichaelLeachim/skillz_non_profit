// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('zelding_skillz.events_utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
zelding_skillz.events_utils.my_parse_int = (function zelding_skillz$events_utils$my_parse_int(item,or){
var p = parseInt(item);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join(''),"NaN")){
return or;
} else {
return p;
}
});
zelding_skillz.events_utils.make_out_of_skillz = (function zelding_skillz$events_utils$make_out_of_skillz(skills,relations){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"cross_skills",cljs.core.cst$kw$data,cljs.core.cons(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","B","C","D","E","F","G","H","E","F","H","ZO","NO","DO","BO","RO","CO","DO","BO"], null),(function (){var iter__8003__auto__ = (function zelding_skillz$events_utils$make_out_of_skillz_$_iter__15592(s__15593){
return (new cljs.core.LazySeq(null,(function (){
var s__15593__$1 = s__15593;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15593__$1);
if(temp__4657__auto__){
var s__15593__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15593__$2)){
var c__8001__auto__ = cljs.core.chunk_first(s__15593__$2);
var size__8002__auto__ = cljs.core.count(c__8001__auto__);
var b__15595 = cljs.core.chunk_buffer(size__8002__auto__);
if((function (){var i__15594 = (0);
while(true){
if((i__15594 < size__8002__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8001__auto__,i__15594);
cljs.core.chunk_append(b__15595,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,i)));

var G__15628 = (i__15594 + (1));
i__15594 = G__15628;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15595),zelding_skillz$events_utils$make_out_of_skillz_$_iter__15592(cljs.core.chunk_rest(s__15593__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15595),null);
}
} else {
var i = cljs.core.first(s__15593__$2);
return cljs.core.cons(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,i)),zelding_skillz$events_utils$make_out_of_skillz_$_iter__15592(cljs.core.rest(s__15593__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8003__auto__(relations);
})())], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"person",cljs.core.cst$kw$data,cljs.core.cons(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u041C\u0435\u0441\u044F\u0446/\u041D\u0430\u0432\u044B\u043A\u0438","\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u0430\u0432\u044B\u043A\u0430","\u041C\u0430\u043A\u0441 \u0443\u0440\u043E\u0432\u0435\u043D\u044C"], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((20),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(100))))),(function (){var iter__8003__auto__ = (function zelding_skillz$events_utils$make_out_of_skillz_$_iter__15598(s__15599){
return (new cljs.core.LazySeq(null,(function (){
var s__15599__$1 = s__15599;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15599__$1);
if(temp__4657__auto__){
var s__15599__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15599__$2)){
var c__8001__auto__ = cljs.core.chunk_first(s__15599__$2);
var size__8002__auto__ = cljs.core.count(c__8001__auto__);
var b__15601 = cljs.core.chunk_buffer(size__8002__auto__);
if((function (){var i__15600 = (0);
while(true){
if((i__15600 < size__8002__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8001__auto__,i__15600);
cljs.core.chunk_append(b__15601,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(i),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(i),cljs.core.cst$kw$max_DASH_level.cljs$core$IFn$_invoke$arity$1(i)], null),(function (){var iter__8003__auto__ = ((function (i__15600,i,c__8001__auto__,size__8002__auto__,b__15601,s__15599__$2,temp__4657__auto__){
return (function zelding_skillz$events_utils$make_out_of_skillz_$_iter__15598_$_iter__15616(s__15617){
return (new cljs.core.LazySeq(null,((function (i__15600,i,c__8001__auto__,size__8002__auto__,b__15601,s__15599__$2,temp__4657__auto__){
return (function (){
var s__15617__$1 = s__15617;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__15617__$1);
if(temp__4657__auto____$1){
var s__15617__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15617__$2)){
var c__8001__auto____$1 = cljs.core.chunk_first(s__15617__$2);
var size__8002__auto____$1 = cljs.core.count(c__8001__auto____$1);
var b__15619 = cljs.core.chunk_buffer(size__8002__auto____$1);
if((function (){var i__15618 = (0);
while(true){
if((i__15618 < size__8002__auto____$1)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8001__auto____$1,i__15618);
cljs.core.chunk_append(b__15619,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(i,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$date_DASH_list,k,cljs.core.cst$kw$value], null),(0)));

var G__15629 = (i__15618 + (1));
i__15618 = G__15629;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15619),zelding_skillz$events_utils$make_out_of_skillz_$_iter__15598_$_iter__15616(cljs.core.chunk_rest(s__15617__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15619),null);
}
} else {
var k = cljs.core.first(s__15617__$2);
return cljs.core.cons(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(i,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$date_DASH_list,k,cljs.core.cst$kw$value], null),(0)),zelding_skillz$events_utils$make_out_of_skillz_$_iter__15598_$_iter__15616(cljs.core.rest(s__15617__$2)));
}
} else {
return null;
}
break;
}
});})(i__15600,i,c__8001__auto__,size__8002__auto__,b__15601,s__15599__$2,temp__4657__auto__))
,null,null));
});})(i__15600,i,c__8001__auto__,size__8002__auto__,b__15601,s__15599__$2,temp__4657__auto__))
;
return iter__8003__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(100)));
})()));

var G__15630 = (i__15600 + (1));
i__15600 = G__15630;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15601),zelding_skillz$events_utils$make_out_of_skillz_$_iter__15598(cljs.core.chunk_rest(s__15599__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15601),null);
}
} else {
var i = cljs.core.first(s__15599__$2);
return cljs.core.cons(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(i),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(i),cljs.core.cst$kw$max_DASH_level.cljs$core$IFn$_invoke$arity$1(i)], null),(function (){var iter__8003__auto__ = ((function (i,s__15599__$2,temp__4657__auto__){
return (function zelding_skillz$events_utils$make_out_of_skillz_$_iter__15598_$_iter__15622(s__15623){
return (new cljs.core.LazySeq(null,((function (i,s__15599__$2,temp__4657__auto__){
return (function (){
var s__15623__$1 = s__15623;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__15623__$1);
if(temp__4657__auto____$1){
var s__15623__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15623__$2)){
var c__8001__auto__ = cljs.core.chunk_first(s__15623__$2);
var size__8002__auto__ = cljs.core.count(c__8001__auto__);
var b__15625 = cljs.core.chunk_buffer(size__8002__auto__);
if((function (){var i__15624 = (0);
while(true){
if((i__15624 < size__8002__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8001__auto__,i__15624);
cljs.core.chunk_append(b__15625,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(i,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$date_DASH_list,k,cljs.core.cst$kw$value], null),(0)));

var G__15631 = (i__15624 + (1));
i__15624 = G__15631;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15625),zelding_skillz$events_utils$make_out_of_skillz_$_iter__15598_$_iter__15622(cljs.core.chunk_rest(s__15623__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15625),null);
}
} else {
var k = cljs.core.first(s__15623__$2);
return cljs.core.cons(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(i,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$date_DASH_list,k,cljs.core.cst$kw$value], null),(0)),zelding_skillz$events_utils$make_out_of_skillz_$_iter__15598_$_iter__15622(cljs.core.rest(s__15623__$2)));
}
} else {
return null;
}
break;
}
});})(i,s__15599__$2,temp__4657__auto__))
,null,null));
});})(i,s__15599__$2,temp__4657__auto__))
;
return iter__8003__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(100)));
})()),zelding_skillz$events_utils$make_out_of_skillz_$_iter__15598(cljs.core.rest(s__15599__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8003__auto__(skills);
})())], null)], null);
});
zelding_skillz.events_utils.make_skillz = (function zelding_skillz$events_utils$make_skillz(raw_skillz){
var crosses = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15632_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,p1__15632_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vals,cljs.core.get.cljs$core$IFn$_invoke$arity$2(raw_skillz,"cross_skills")));
var skillz = (function (){var iter__8003__auto__ = ((function (crosses){
return (function zelding_skillz$events_utils$make_skillz_$_iter__15688(s__15689){
return (new cljs.core.LazySeq(null,((function (crosses){
return (function (){
var s__15689__$1 = s__15689;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15689__$1);
if(temp__4657__auto__){
var s__15689__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15689__$2)){
var c__8001__auto__ = cljs.core.chunk_first(s__15689__$2);
var size__8002__auto__ = cljs.core.count(c__8001__auto__);
var b__15691 = cljs.core.chunk_buffer(size__8002__auto__);
if((function (){var i__15690 = (0);
while(true){
if((i__15690 < size__8002__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8001__auto__,i__15690);
cljs.core.chunk_append(b__15691,(function (){var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(i,"\u041C\u0435\u0441\u044F\u0446/\u041D\u0430\u0432\u044B\u043A\u0438");
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$max_DASH_level,zelding_skillz.events_utils.my_parse_int(cljs.core.get.cljs$core$IFn$_invoke$arity$2(i,"\u041C\u0430\u043A\u0441 \u0443\u0440\u043E\u0432\u0435\u043D\u044C"),(0)),cljs.core.cst$kw$tags,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__15690,name,i,c__8001__auto__,size__8002__auto__,b__15691,s__15689__$2,temp__4657__auto__,crosses){
return (function (p1__15633_SHARP_){
return cljs.core.contains_QMARK_(p1__15633_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(i,"\u041C\u0435\u0441\u044F\u0446/\u041D\u0430\u0432\u044B\u043A\u0438"));
});})(i__15690,name,i,c__8001__auto__,size__8002__auto__,b__15691,s__15689__$2,temp__4657__auto__,crosses))
,crosses)),cljs.core.cst$kw$name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(i,"\u041C\u0435\u0441\u044F\u0446/\u041D\u0430\u0432\u044B\u043A\u0438"),cljs.core.cst$kw$description,cljs.core.get.cljs$core$IFn$_invoke$arity$2(i,"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u0430\u0432\u044B\u043A\u0430"),cljs.core.cst$kw$date_DASH_list,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8003__auto__ = ((function (i__15690,name,i,c__8001__auto__,size__8002__auto__,b__15691,s__15689__$2,temp__4657__auto__,crosses){
return (function zelding_skillz$events_utils$make_skillz_$_iter__15688_$_iter__15718(s__15719){
return (new cljs.core.LazySeq(null,((function (i__15690,name,i,c__8001__auto__,size__8002__auto__,b__15691,s__15689__$2,temp__4657__auto__,crosses){
return (function (){
var s__15719__$1 = s__15719;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__15719__$1);
if(temp__4657__auto____$1){
var s__15719__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15719__$2)){
var c__8001__auto____$1 = cljs.core.chunk_first(s__15719__$2);
var size__8002__auto____$1 = cljs.core.count(c__8001__auto____$1);
var b__15721 = cljs.core.chunk_buffer(size__8002__auto____$1);
if((function (){var i__15720 = (0);
while(true){
if((i__15720 < size__8002__auto____$1)){
var i__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8001__auto____$1,i__15720);
cljs.core.chunk_append(b__15721,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(i__$1),i__$1], null));

var G__15742 = (i__15720 + (1));
i__15720 = G__15742;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15721),zelding_skillz$events_utils$make_skillz_$_iter__15688_$_iter__15718(cljs.core.chunk_rest(s__15719__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15721),null);
}
} else {
var i__$1 = cljs.core.first(s__15719__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(i__$1),i__$1], null),zelding_skillz$events_utils$make_skillz_$_iter__15688_$_iter__15718(cljs.core.rest(s__15719__$2)));
}
} else {
return null;
}
break;
}
});})(i__15690,name,i,c__8001__auto__,size__8002__auto__,b__15691,s__15689__$2,temp__4657__auto__,crosses))
,null,null));
});})(i__15690,name,i,c__8001__auto__,size__8002__auto__,b__15691,s__15689__$2,temp__4657__auto__,crosses))
;
return iter__8003__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,cljs.core.nil_QMARK_,cljs.core.cst$kw$value),(function (){var iter__8003__auto____$1 = ((function (i__15690,iter__8003__auto__,name,i,c__8001__auto__,size__8002__auto__,b__15691,s__15689__$2,temp__4657__auto__,crosses){
return (function zelding_skillz$events_utils$make_skillz_$_iter__15688_$_iter__15724(s__15725){
return (new cljs.core.LazySeq(null,((function (i__15690,iter__8003__auto__,name,i,c__8001__auto__,size__8002__auto__,b__15691,s__15689__$2,temp__4657__auto__,crosses){
return (function (){
var s__15725__$1 = s__15725;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__15725__$1);
if(temp__4657__auto____$1){
var s__15725__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15725__$2)){
var c__8001__auto____$1 = cljs.core.chunk_first(s__15725__$2);
var size__8002__auto____$1 = cljs.core.count(c__8001__auto____$1);
var b__15727 = cljs.core.chunk_buffer(size__8002__auto____$1);
if((function (){var i__15726 = (0);
while(true){
if((i__15726 < size__8002__auto____$1)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8001__auto____$1,i__15726);
cljs.core.chunk_append(b__15727,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,zelding_skillz.events_utils.my_parse_int(cljs.core.get.cljs$core$IFn$_invoke$arity$2(i,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),(0)),cljs.core.cst$kw$name,k], null));

var G__15743 = (i__15726 + (1));
i__15726 = G__15743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15727),zelding_skillz$events_utils$make_skillz_$_iter__15688_$_iter__15724(cljs.core.chunk_rest(s__15725__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15727),null);
}
} else {
var k = cljs.core.first(s__15725__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,zelding_skillz.events_utils.my_parse_int(cljs.core.get.cljs$core$IFn$_invoke$arity$2(i,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),(0)),cljs.core.cst$kw$name,k], null),zelding_skillz$events_utils$make_skillz_$_iter__15688_$_iter__15724(cljs.core.rest(s__15725__$2)));
}
} else {
return null;
}
break;
}
});})(i__15690,iter__8003__auto__,name,i,c__8001__auto__,size__8002__auto__,b__15691,s__15689__$2,temp__4657__auto__,crosses))
,null,null));
});})(i__15690,iter__8003__auto__,name,i,c__8001__auto__,size__8002__auto__,b__15691,s__15689__$2,temp__4657__auto__,crosses))
;
return iter__8003__auto____$1(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(15)));
})()));
})())], null);
})());

var G__15744 = (i__15690 + (1));
i__15690 = G__15744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15691),zelding_skillz$events_utils$make_skillz_$_iter__15688(cljs.core.chunk_rest(s__15689__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15691),null);
}
} else {
var i = cljs.core.first(s__15689__$2);
return cljs.core.cons((function (){var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(i,"\u041C\u0435\u0441\u044F\u0446/\u041D\u0430\u0432\u044B\u043A\u0438");
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$max_DASH_level,zelding_skillz.events_utils.my_parse_int(cljs.core.get.cljs$core$IFn$_invoke$arity$2(i,"\u041C\u0430\u043A\u0441 \u0443\u0440\u043E\u0432\u0435\u043D\u044C"),(0)),cljs.core.cst$kw$tags,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (name,i,s__15689__$2,temp__4657__auto__,crosses){
return (function (p1__15633_SHARP_){
return cljs.core.contains_QMARK_(p1__15633_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(i,"\u041C\u0435\u0441\u044F\u0446/\u041D\u0430\u0432\u044B\u043A\u0438"));
});})(name,i,s__15689__$2,temp__4657__auto__,crosses))
,crosses)),cljs.core.cst$kw$name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(i,"\u041C\u0435\u0441\u044F\u0446/\u041D\u0430\u0432\u044B\u043A\u0438"),cljs.core.cst$kw$description,cljs.core.get.cljs$core$IFn$_invoke$arity$2(i,"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u0430\u0432\u044B\u043A\u0430"),cljs.core.cst$kw$date_DASH_list,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8003__auto__ = ((function (name,i,s__15689__$2,temp__4657__auto__,crosses){
return (function zelding_skillz$events_utils$make_skillz_$_iter__15688_$_iter__15730(s__15731){
return (new cljs.core.LazySeq(null,((function (name,i,s__15689__$2,temp__4657__auto__,crosses){
return (function (){
var s__15731__$1 = s__15731;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__15731__$1);
if(temp__4657__auto____$1){
var s__15731__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15731__$2)){
var c__8001__auto__ = cljs.core.chunk_first(s__15731__$2);
var size__8002__auto__ = cljs.core.count(c__8001__auto__);
var b__15733 = cljs.core.chunk_buffer(size__8002__auto__);
if((function (){var i__15732 = (0);
while(true){
if((i__15732 < size__8002__auto__)){
var i__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8001__auto__,i__15732);
cljs.core.chunk_append(b__15733,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(i__$1),i__$1], null));

var G__15745 = (i__15732 + (1));
i__15732 = G__15745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15733),zelding_skillz$events_utils$make_skillz_$_iter__15688_$_iter__15730(cljs.core.chunk_rest(s__15731__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15733),null);
}
} else {
var i__$1 = cljs.core.first(s__15731__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(i__$1),i__$1], null),zelding_skillz$events_utils$make_skillz_$_iter__15688_$_iter__15730(cljs.core.rest(s__15731__$2)));
}
} else {
return null;
}
break;
}
});})(name,i,s__15689__$2,temp__4657__auto__,crosses))
,null,null));
});})(name,i,s__15689__$2,temp__4657__auto__,crosses))
;
return iter__8003__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,cljs.core.nil_QMARK_,cljs.core.cst$kw$value),(function (){var iter__8003__auto____$1 = ((function (iter__8003__auto__,name,i,s__15689__$2,temp__4657__auto__,crosses){
return (function zelding_skillz$events_utils$make_skillz_$_iter__15688_$_iter__15736(s__15737){
return (new cljs.core.LazySeq(null,((function (iter__8003__auto__,name,i,s__15689__$2,temp__4657__auto__,crosses){
return (function (){
var s__15737__$1 = s__15737;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__15737__$1);
if(temp__4657__auto____$1){
var s__15737__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15737__$2)){
var c__8001__auto__ = cljs.core.chunk_first(s__15737__$2);
var size__8002__auto__ = cljs.core.count(c__8001__auto__);
var b__15739 = cljs.core.chunk_buffer(size__8002__auto__);
if((function (){var i__15738 = (0);
while(true){
if((i__15738 < size__8002__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8001__auto__,i__15738);
cljs.core.chunk_append(b__15739,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,zelding_skillz.events_utils.my_parse_int(cljs.core.get.cljs$core$IFn$_invoke$arity$2(i,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),(0)),cljs.core.cst$kw$name,k], null));

var G__15746 = (i__15738 + (1));
i__15738 = G__15746;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15739),zelding_skillz$events_utils$make_skillz_$_iter__15688_$_iter__15736(cljs.core.chunk_rest(s__15737__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15739),null);
}
} else {
var k = cljs.core.first(s__15737__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,zelding_skillz.events_utils.my_parse_int(cljs.core.get.cljs$core$IFn$_invoke$arity$2(i,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),(0)),cljs.core.cst$kw$name,k], null),zelding_skillz$events_utils$make_skillz_$_iter__15688_$_iter__15736(cljs.core.rest(s__15737__$2)));
}
} else {
return null;
}
break;
}
});})(iter__8003__auto__,name,i,s__15689__$2,temp__4657__auto__,crosses))
,null,null));
});})(iter__8003__auto__,name,i,s__15689__$2,temp__4657__auto__,crosses))
;
return iter__8003__auto____$1(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(15)));
})()));
})())], null);
})(),zelding_skillz$events_utils$make_skillz_$_iter__15688(cljs.core.rest(s__15689__$2)));
}
} else {
return null;
}
break;
}
});})(crosses))
,null,null));
});})(crosses))
;
return iter__8003__auto__(cljs.core.get.cljs$core$IFn$_invoke$arity$2(raw_skillz,"person"));
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tags,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (crosses,skillz){
return (function (item){
return cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null));
});})(crosses,skillz))
,skillz),crosses),cljs.core.cst$kw$skills,skillz], null);
});
