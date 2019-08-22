import { Component, OnInit } from "@angular/core";
import { Product, Categories, Manufacturers } from "./../../models/app.product.model";
import { ProductLogic } from "./../../models/app.product.logic";
@Component({
    selector: 'app-product-component',
    templateUrl: './app.product.component.view.html'
})
export class ProductComponent implements OnInit {
    // public members 
    product: Product;
    products: Array<Product>;

    // local public members fot storing constant arrays
    categoris = Categories;
    manufacturers = Manufacturers;

    // private member of logic class
    private logic: ProductLogic;

    // member for headers
    headers: Array<string>;
    constructor() {
        // define instances for members
        this.product = new Product(0, '', '', '', 0);
        this.products = new Array<Product>();
        this.logic = new ProductLogic();
        this.headers = new Array<string>();
    }
    // the method that will be executed immediately after constructor
    ngOnInit(): void {
        // iterate over the Product instance and read all its public properties
        for (let p in this.product) {
            this.headers.push(p);
        }

        this.products = this.logic.getProducts();
    }

    clear(): void {
        this.product = new Product(0, '', '', '', 0);
    }
    save(): void {
        this.products = this.logic.saveProduct(this.product);
    }
    getSelectedData(prd: Product): void {
        // new location will be created with values from 'prd'
        // and product will point to new location
        this.product = Object.assign({}, prd);
    }
}
