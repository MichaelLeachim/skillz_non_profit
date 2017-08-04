// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('zelding_skillz.templates.uilib');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
zelding_skillz.templates.uilib.help_tooltip = (function zelding_skillz$templates$uilib$help_tooltip(tooltip_data){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (){
return (window["retooltip"]).call(null);
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (){
return (window["retooltip"]).call(null);
}),cljs.core.cst$kw$display_DASH_name,"tooltip",cljs.core.cst$kw$reagent_DASH_render,(function (tooltip_data__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$tooltipped$black_DASH_text,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data_DASH_position,"right",cljs.core.cst$kw$data_DASH_delay,"50",cljs.core.cst$kw$data_DASH_tooltip,tooltip_data__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"14px"], null)], null),"help_outline"], null)], null);
})], null));
});
