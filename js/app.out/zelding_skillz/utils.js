// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('zelding_skillz.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
zelding_skillz.utils.skill_normalized = (function zelding_skillz$utils$skill_normalized(max_level,level){
return ((100) * (level / max_level));
});
zelding_skillz.utils.is_subset_QMARK_ = (function zelding_skillz$utils$is_subset_QMARK_(set_a,set_b){
return clojure.set.subset_QMARK_(set_a,set_b);
});
zelding_skillz.utils.color_of_level = (function zelding_skillz$utils$color_of_level(level){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#e3f2fd","#bbdefb","#90caf9","#64b5f6","#42a5f5","#2196f3"], null),cljs.core.mod((level - (1)),(6)));
});
