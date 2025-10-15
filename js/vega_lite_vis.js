var bar_chart = "js/landuse_bar.vg.json";
vegaEmbed("#bar", bar_chart).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var map_chart = "js/landuse_pct_map.vg.json";
vegaEmbed("#map", map_chart).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var bubble_plot = "js/landuse_pop_bubble.vg.json";
vegaEmbed("#bubble", bubble_plot).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var dot_plot = "js/pop_change_dotplot.vg.json";
vegaEmbed("#dot", dot_plot).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var tree_map = "js/pop_treemap.vg.json";
vegaEmbed("#tree", tree_map).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);