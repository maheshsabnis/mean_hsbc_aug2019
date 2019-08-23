# Programming with Angular
1. @angular/core
   1. Contains most popular standard classes
      1. Component, Pipe, Injectable, Directive, NgModule, Input, Output, etc.
2. @angular/compiler
   1. Manage the Compilation of Code using Ahead-of-Time (AoT) compilation
   2. AoT, compress the build size
3. @angular/platform-browser
   1. Provides 'BrowserModule' class for managing application loading in browser
   2. Mandatory Module in each Angular Application
4. @angular/platform-browser-dynamic
   1. Provides 'platformBrowserDynamic' object to bootstrap (load and execute) angular module in-side browser
   2. This is used by 'BrowserModule'
5. @angular/common
   1. Common Module loader, manages all source code files with modules and provide to Compiler
   2. Provides Access of External Modules to current Angular Module
      1. Manages Shared and Lazy Loading of module
   3. Manages Http Calls from Angular 6+
6.  @angular/forms
    1.  Provide classes for Form Management and Validations
7.  @angular/http
    1.  Provides classes for http calls (Depticated from Angular 6+)
8.  @angular/router
    1.  Manages Routing for Single-Page-Application

#=============================================================================
1. Decorators
   1. An object that is applied on Class/Method/Property to assign an additional behavior to it.
2. Module Decorator using NgModule class and its applied as @NgModule
   1. The NgModule is a class having following properties
      1. imports, an array having all standard and external modules to be loaded in current module
      2. declarations: an array having all components/directives/pipes in current application
      3. provides: an array to register all Angular services
      4. bootstrap: an array for loading components in browser when an application starts execution
3. Component Decorator @Component
   1. Applied on a class to make it as Angular Component
   2. Porperties
      1. The 'selector', the string containg custom tag to load component's html in browser when the componenent is loaded. 
      2. The 'template' and 'templateUrl'
         1. template: inline HTML template string
         2. templateUrl: the absolute path of Html file
4. Directive Decorator @Directive
   1. Applied on a class to make it as Angular Directive
5. Service Decoratror @Injectable
   1. Applied on a class to make it as Angular Service
6. Pipe Decorator @Pipe
   1. Applied on a class to make it as Angular Pipe
7. Input and Output Decorator using @Input and @Output
   1. @Input Applied on properties to make them as Input property
   2. @Output is applied on EventEmitter to emit an event
8. Event Decorators @HostListener
   1. Applied on method to execute a method when an event occures
9. The OnInit interface implemenetd by Component that provide 'ngOnInit()' method
   1.  This method will me invoked immediately after component constructor

#=============================================================================
File Name Rules
1. Module
   1. app.XXXX.module.ts
2. Component
   1. app.XXXX.component.ts
3. View or html file
   1. app.XXXX.component.view.html
4. Directive
   1. app.XXXX.directive.ts
5. Model or logic
   1. app.XXXX.model.ts
   2. app.XXXX.logic.ts
6. Constants
   1. app.XXXX.constants.ts
7. Pipe
   1. app.XXXX.pipe.ts

#=============================================================================

# Angular Directives
Three Types of Directives
1. Component Directive
2. Structural Directive
   1. Dynamically add and remove DOM element 
   2. *ngFor --> for..of loop
   3. *ngIf --> if Condition
   4. *ngSwitch and *ngSwicthCase 
3. Attrinbute Directive
   1. Attributes for HTML element for setting its behavior

The EventEmitter<T> class, is used to emit an event from the component, we need a subscriber to receive to the emiitted event from Event Emitter. The 'T' is the type of data to be emitted by EventEmitter and this data will be received by receiver.

#=============================================================================
#Angular Service
1. Used for containg heavy utility logic
2. Used to contain logic for AJAX class or Socket calls aka external communication
   1. The service class must be decorated using @Injectable decorator
      1. The class will be used to register in provider array of NgModule
   2. The class must be registered in 'providers:[]' array of NgModule class
      1. The class will be used for Dependency Injection
   3. @angular/http package
      1. HttpModule
      2. Http Class
         1. get/post/put/delete methods
      3. Request Class
      4. Response Class
      5. Heanders Class
3. To Establish Disconnected communication across components
   1. The service class must be decorated using @Injectable decorator
   2. The class must be registered in 'providers:[]' array of NgModule class
   3. The service must have an EventEmitter<T> to listen to publish data from sender component
   4. Must have the an object to store data that is published
   5. Must have a public method that will be called by sender component to emit an event with published data 
