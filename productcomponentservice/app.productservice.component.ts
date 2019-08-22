import { Component, OnInit } from "@angular/core";
import { Product, Categories, Manufacturers } from "../../models/app.product.model";
import { HttpService } from "./../../services/app.http.service";
import { Response } from "@angular/http";
@Component({
    selector: 'app-productservice-component',
    templateUrl: './app.productservice.component.view.html'
})
export class ProductServiceComponent implements OnInit {
    // public members 
    product: Product;
    products: Array<Product>;

    // local public members fot storing constant arrays
    categoris = Categories;
    manufacturers = Manufacturers;

    // private member of logic class

    // member for headers
    headers: Array<string>;
    // injecting the service in the constructor 
    constructor(private serv: HttpService) {
        // define instances for members
        this.product = new Product(0, '', '', '', 0);
        this.products = new Array<Product>();
        this.headers = new Array<string>();
    }
    // the method that will be executed immediately after constructor
    ngOnInit(): void {
        // iterate over the Product instance and read all its public properties
        for (let p in this.product) {
            this.headers.push(p);
        }

        // subscribe to the HttpService and its getData() method
        this.serv.getData().subscribe((resp: Response) => {
            this.products = resp.json();
        },(error=>{
            console.log(error);
        }));

    }

    clear(): void {
        this.product = new Product(0, '', '', '', 0);
    }
    save(): void {
        this.serv.postData(this.product).subscribe((resp: Response) => {
            this.products = resp.json(); 
        });
    }
    getSelectedData(prd: Product): void {
        // new location will be created with values from 'prd'
        // and product will point to new location
        this.product = Object.assign({}, prd);
    }
}
