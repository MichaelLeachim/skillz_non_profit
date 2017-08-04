(function(){
    var data = null;
    var graph = null;
    function DestroyChart(){
        data = null;
        graph = null;
    }
    function DrawChart(chart_type,container,width,height,dataset,x_axis_cb,y_axis_cb,z_axis_cb){
        var container = document.getElementById(container);
        data = new vis.DataSet();
        dataset.forEach(function(item){
            data.add({x:item["x"],y:item["y"],z:item["z"],extra:item["tooltip"]});
        })
        var options = {
            width:  height,
            height: width,
            verticalRatio:2.0,
            showPerspective:false,
            style: chart_type,
            showPerspective: true,
            showGrid: false,
            showShadow: false,
            xValueLabel: x_axis_cb,
            yValueLabel: y_axis_cb,
            zValueLabel: z_axis_cb,
            keepAspectRatio: true,
            verticalRatio: 0.5
        };
        var camera = graph ? graph.getCameraPosition() : null;
        // create our graph
        graph = new vis.Graph3d(container, data, options);
        if (camera) graph.setCameraPosition(camera); // restore camera position
    }
    // create accessors for cljs
    window.DestroyChart = DestroyChart;
    window.DrawChart = DrawChart;
})()

