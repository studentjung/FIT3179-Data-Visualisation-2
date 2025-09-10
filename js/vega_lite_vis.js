var spec_bar_chart = "js/daily_cost_bar_chart.vg.json";
vegaEmbed("#bar_chart", spec_bar_chart).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);