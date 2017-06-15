# AngularJS Directive for Tableau

[![Bower version](https://badge.fury.io/bo/angularjs-tableau.svg)](https://badge.fury.io/bo/angularjs-tableau)
[![Build Status](https://travis-ci.org/jensenkd/angularjs-tableau.svg?branch=master)](https://travis-ci.org/jensenkd/angularjs-tableau)

This is an Angular module that provides a service and directive for easily embedding Tableau visualizations within
your Angular app.

It's built with [Angular 1.4.x](https://angularjs.org) and [Gulp.js](http://gulpjs.com) and targets modern browsers 
(latest Chrome, Firefox, and Safari, IE10+) and Tableau Server 9.1 - 9.3, 10.1 - 10.3.

## Usage

1. Install the component (e.g. with Bower). If needed, manually add a script tag to your HTML to load the 
  lib/tableau.js file
  
      ````
      bower install angularjs-tableau --save
      ````
  
2. Add a dependency on the `angularjs.tableau` module in your Angular app module:

      ````
      angular.module('myApp', ['angularjs.tableau']);
      ````

3. Currently, you must manually add the Tableau Server script tag to your main HTML page, per the 
  [Tableau instructions](http://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_concepts_get_API.htm) 
  
4. To embed a visualization, decorate a `div` or other element with the `eui-tableau-viz` attribute. The value of
  this attribute should be the workbook/view path for the desired visualization, as defined on the Tableau server
  (this can be found in Tableau embed code blocks as the "name" parameter. Encoded HTML entities should be decoded, 
  so e.g. if your Tableau embed code contains `<param name='name' value='MyWorkbook&#47;MyViz' />`, enter this as
  `MyWorkbook/MyViz`). Also, you'll need to specify a `viz-height` attribute on the same element, to tell the 
  visualization how tall it should be (its width will behave like a block-level element and fill its container).
  Example:
    `<div eui-tableau-viz="MyWorkbook/MyViz" viz-height="200px"></div>`
    
5. Events:
The following events are available in the directive.  You can assign a callback to any of them.
    - onCustomViewLoad
    - onCustomViewRemove
    - onCustomViewSave
    - onCustomViewSetDefault
    - onFilterChange
    - onMarksSelection
    - onParameterChange
    - onStoryPointSwitch
    - onTabSwitch
    - onToolbarStateChange
    - onVizResize

6. Filters
`  { 
`    hideTabs: true // bool : Indicates whether tabs are hidden or shown.
`  }
hideToolbar
bool
Indicates whether the toolbar is hidden or shown.
instanceIdToClone	string	Specifies the ID of an existing instance to make a copy (clone) of. This is useful if the user wants to continue analysis of an existing visualization without losing the state of the original. If the ID does not refer to an existing visualization, the cloned version is derived from the original visualization.
height
string
Can be any valid CSS size specifier. If not specified, defaults to the published height of the view.
width
string
Can be any valid CSS size specifier. If not specified, defaults to the published width of the view.
device
string
Specifies a device layout for a dashboard, if it exists. Values can be desktop, tablet, or phone. If not specified, defaults to loading a layout based on the smallest dimension of the hosting iframe element.
"filter name"	string	Apply a filter that you specify to the view when it is first rendered. For example, if you have an Academic Year filter and only want to display data for 2017, you might enter "Academic Year": "2016". For more information, see Filtering.
onFirstInteractive
callback(e: TableauEvent)
Callback function that is invoked when the Viz object first becomes interactive. This is only called once, but it’s guaranteed to be called. If the Viz object is already interactive, it will be called immediately, but on a separate "thread."
Note: If a listener has been attached to the CUSTOM_VIEW_LOAD event, that event is raised after the callback function specified for onFirstInteractive has been called.
onFirstVizSizeKnown
callback(e: VizResizeEvent)
Callback function that's invoked when the size of the Viz object is known. You can use this callback to perform tasks such as resizing the elements surrounding the Viz object once the object's size has been established.

## Contributing

1. Install a current version of Node.js (built with v4.2.4) from https://nodejs.org/
2. Install Bower: `npm install -g bower`
3. Install Gulp: `npm install -g gulp`
4. cd to the project root and install dependencies: `npm install && bower install`

NOTE: Node.js is only used for the development environment; it is not required for the component itself at runtime.

You can use the following commands:

- `$ gulp` to build the component and demo app in folder dist
- `$ gulp serve` to start BrowserSync server on your source files with live reload
- `$ gulp serve:dist` to start BrowserSync server on your optimized application without live reload
- `$ gulp test` to run your unit tests with Karma
- `$ gulp test:auto` to run your unit tests with Karma in watch mode

## See Also

For more info on Tableau configuration, see Tableau's [JavaScript API documentation]
(http://onlinehelp.tableau.com/current/api/js_api/en-us/help.htm)

## Credits

Credit to https://github.com/effectiveinc/angular-tableau for creating the original implementation

## License

Mit License: http://www.opensource.org/licenses/mit-license.php
