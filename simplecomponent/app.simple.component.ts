// 1. import the component class
import { Component } from '@angular/core';
// 2. apply the Component Decorator on the class and set
// its properties
@Component({
    selector: 'app-simple-component',
    templateUrl: './app.simple.component.view.html'
})
export class SimpleComponent {
    name: string;
    url: string;
    constructor() {
        this.name = 'Mahesh';
        this.url = "http://www.dotnetcurry.com";
    }
    change(): void {
        this.name = "Mahesh Sabnis";
    }
}
