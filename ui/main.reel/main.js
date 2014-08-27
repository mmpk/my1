/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    templateDidLoad:  {
        value:function (){
            var flow = this.templateObjects.flow;
            flow.addBeforeOwnPropertyChangeListener("scroll", this.onScrolling) 
        }        
    },
    onScrolling: {
        value: function(v){
            console.log(v);
            if(v > 3){
                 var r = this.templateObjects.RangeController;
                r.content = r.content + r.content;
            }
        }
    },
    pushData: {
        value: function (v) {
            var flow = this.templateObjects.flow; 
            var i = 0;
                function interval()
                {
                    i++; 
                    if(i > 200)  clearInterval(plusInt);
                    flow.cameraPosition = [flow.cameraPosition[0], flow.cameraPosition[1], flow.cameraPosition[2]-5]; 
                }
                var plusInt=setInterval(interval,5);
        }
    },
    minCam: {
        value: function (v) {
            var flow = this.templateObjects.flow; 
            var i = 0;
            function interval()
            {
                i++; 
                if(i > 200)  clearInterval(minusInt);
                flow.cameraPosition = [flow.cameraPosition[0], flow.cameraPosition[1], flow.cameraPosition[2]+5]; 
            }
            var minusInt=setInterval(interval,5);
        }
    }
    
});
