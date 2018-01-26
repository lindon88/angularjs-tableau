!function(){"use strict";angular.module("angularjs.tableau",[])}();
!function(){"use strict";function t(){function t(t,e){return e.tableau||t.warn("Tableau API does not seem to be loaded! Make sure to include the appropriate <script> tag."),u.api=e.tableau,u}function e(t){angular.extend(n,t)}function a(t){return angular.extend({},n,t)}t.$inject=["$log","$window"];var n={},u={createOptions:a,api:null};this.setDefaultOptions=e,this.$get=t}angular.module("angularjs.tableau").provider("tableau",t)}();
!function(){"use strict";function e(e,n,t){var o={restrict:"A",scope:{path:"@tableauViz",height:"=",width:"=",options:"=",onCustomViewLoad:"&",onCustomViewRemove:"&",onCustomViewSave:"&",onCustomViewSetDefault:"&",onFilterChange:"&",onMarksSelection:"&",onParameterChange:"&",onStoryPointSwitch:"&",onTabSwitch:"&",onToolbarStateChange:"&",onVizResize:"&"},link:function(o,a,i){function r(){var n=e.createOptions({width:o.width?o.width:"100%",height:o.height?o.height:"100%"});o.options&&angular.merge(n,o.options),s=new e.api.Viz(a[0],o.path,n)}var s;return o.path?(r(),o.$on("$destroy",function(){s&&s.dispose(),angular.isDefined(stop)&&(t.cancel(stop),stop=void 0)}),o.onCustomViewLoad&&angular.isDefined(i.onCustomViewLoad)&&s.addEventListener("customViewLoad",function(e){n.log("Event 'customViewLoad' has fired"),o.onCustomViewLoad({arg1:e})}),o.onCustomViewRemove&&angular.isDefined(i.onCustomViewRemove)&&s.addEventListener("customViewRemove",function(e){n.log("Event 'customViewRemove' has fired"),o.onCustomViewRemove({arg1:e})}),o.onCustomViewSave&&angular.isDefined(i.onCustomViewSave)&&s.addEventListener("customViewSave",function(e){n.log("Event 'customViewSave' has fired"),o.onCustomViewSave({arg1:e})}),o.onCustomViewSetDefault&&angular.isDefined(i.onCustomViewSetDefault)&&s.addEventListener("customViewSetDefault",function(e){n.log("Event 'customViewSetDefault' has fired"),o.onCustomViewSetDefault({arg1:e})}),o.onFilterChange&&angular.isDefined(i.onFilterChange)&&s.addEventListener("filterChange",function(e){n.log("Event 'filterChange' has fired"),o.onFilterChange({arg1:e})}),o.onMarksSelection&&angular.isDefined(i.onMarksSelection)&&s.addEventListener("marksSelection",function(e){n.log("Event 'marksSelection' has fired"),o.onMarksSelection({arg1:e})}),o.onParameterChange&&angular.isDefined(i.onParameterChange)&&s.addEventListener("parameterValueChange",function(e){n.log("Event 'parameterValueChange' has fired"),o.onParameterChange({arg1:e})}),o.onStoryPointSwitch&&angular.isDefined(i.onStoryPointSwitch)&&s.addEventListener("storyPointSwitch",function(e){n.log("Event 'storyPointSwitch' has fired"),o.onStoryPointSwitch({arg1:e})}),o.onTabSwitch&&angular.isDefined(i.onTabSwitch)&&s.addEventListener("tabSwitch",function(e){n.log("Event 'tabSwitch' has fired"),o.onTabSwitch({arg1:e})}),o.onToolbarStateChange&&angular.isDefined(i.onToolbarStateChange)&&s.addEventListener("toolbarStateChange",function(e){n.log("Event 'toolbarStateChange' has fired"),o.onToolbarStateChange({arg1:e})}),void(o.onVizResize&&angular.isDefined(i.onVizResize)&&s.addEventListener("vizResize",function(e){n.log("Event 'vizResize' has fired"),o.onVizResize({arg1:e})}))):void n.log("Error: No URL was specified for Tableau Viz")}};return o}e.$inject=["tableau","$log","$interval"],angular.module("angularjs.tableau").directive("tableauViz",e)}();