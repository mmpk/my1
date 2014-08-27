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
            var r = this.templateObjects.rangeController;
            flow.addBeforeOwnPropertyChangeListener("scroll", function(v){
                 r.content = r.content + r.content;
            }) 
        }        
    },
    onScrolling: {
        value: function(v){
            console.log(this.content);
            if(v > 3){
                this.content = this.content + this.content;
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
