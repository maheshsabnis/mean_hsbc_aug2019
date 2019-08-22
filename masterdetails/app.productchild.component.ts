import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductData, Products } from "./../../models/app.newproduct.models";
@Component({
    selector: 'app-productchild-component',
    template: `
        <h2>List of Products</h2>
        <table>
         <thead>
           <tr>
            <td>ProductIDd</td>
            <td>ProductName</td>
            <td>CatId</td>
           </tr>
         </thead>
         <tbody>
           <tr *ngFor="let p of FilteredProducts">
           <td>{{p.ProdId}}</td>
             <td>{{p.ProdName}}</td>
             <td>{{p.CatId}}</td>
           </tr>
         </tbody>
      </table>
      <hr/>
      <input type="button" value="Notify" (click)="onGenerateNotification()" />
    `
})
export class ProductChildComponent implements OnInit {
    products = Products;
    prd: ProductData;

    // to accept data from the parent component
    // the curent component must declare a property or a public member
    //  as input type i.e. decorated with @Input decorator
    private _CatId: number;

    private _FilteredProducts: Array<ProductData>;

    // declare the EventEmiiter object decorated with @Output and must define a payload aka the data type to be communicated
    // the EventEmitter will be used as 'event' for Event-Binding
    // (notify)
    // the subscriber method for the event will receive the event data aka payload using the standard '$event' object
    @Output()
    notify: EventEmitter<string>;

    constructor() {
        this.prd = new ProductData(0, '', 0);
        this._CatId = 0;
        this._FilteredProducts = new Array<ProductData>();
        this.notify = new EventEmitter<string>();
    }

    // public set and get properties for Input
    // @Input decorator will set behavior to public member of component class
    // to be used as 'Property-Binding'
    // <app-productchild-component [CatId]=""><>
    @Input()
    set CatId(v: number) {
        this._CatId = v;
        console.log(this._CatId);
    }

    get CatId(): number {
        return this._CatId;
    }

    ngOnInit(): void { }

    // the reado-only property, thst will be invoked when
    // the proeprty CatId is updated
    // becaused FilteredProducts is dependening on CatId

    get FilteredProducts(): Array<ProductData> {
        this._FilteredProducts = new Array<ProductData>();
        if (this._CatId > 0) {
            this._FilteredProducts = this.products.filter((p, i) => {
                return p.CatId == this._CatId;
            });
        } else {
            this._FilteredProducts = this.products;
        }
        return this._FilteredProducts;
    }

    // the method that will emit an event when an event is raised on UI
    onGenerateNotification(): void {
        this.notify.emit(`For the CatId ${this.CatId} we founc ${this.FilteredProducts.length} records`);
    }
}
