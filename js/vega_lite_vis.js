var bar_chart = "js/landuse_bar.vg.json";
vegaEmbed("#bar", bar_chart, { actions: false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var map_chart = "js/landuse_pct_map.vg.json";
vegaEmbed("#map", map_chart, { actions: false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var scatter_plot = "js/landuse_pop_bubble.vg.json";
vegaEmbed("#scatter", scatter_plot, { actions: false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

const bubble_container = document.getElementById("bubble");
const bubble_width = bubble_container.clientWidth - 190;
async function renderBubble() {
    
    const bubble_res = await fetch("js/landuse_migration_bubble.vg.json");
    const bubble_spec = await bubble_res.json();
    
    const dyna_bubble_map = {
        ...bubble_spec,
        width: bubble_width / 3
    };
    
    vegaEmbed("#bubble", dyna_bubble_map, { actions: false }).then(function(result) {
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
}

renderBubble()

const tree_container = document.getElementById("tree");
const tree_width = tree_container.clientWidth - 50;
async function renderTreeMap() {
    
    const tree_res = await fetch("js/pop_treemap.vg.json");
    const tree_spec = await tree_res.json();
    
    const dyna_tree_map = {
        ...tree_spec,
        width: tree_width
    };
    
    vegaEmbed("#tree", dyna_tree_map, { actions: false }).then(function(result) {
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
}

renderTreeMap()