import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../models/app.product.model";
import { Observable } from "rxjs";
 
 
@Injectable()
export class Http5Service {

    url: string;

    // inject the Http object. The instance of this
    // will be provided by @angular/http and its HttpModule class
    // The HttpModule class must be imported in import:[] of NgModule  
    constructor(private http: HttpClient) { 
        this.url = 'http://localhost:9009';
    }
    getData(): Observable<Product> {
        let resp: Observable<Product> = this.http.get<Observable<Product>>(`${this.url}/api/products`);
        return resp;
    }

    postData(prd: Product): Observable<Product> {
        let options = {
              header: new HttpHeaders({
                   'Content-Type':'application/json' 
              })  
        };
        let resp: Observable<Product> = this.http.post<Observable<Product>>(`${this.url}/api/products`,JSON.stringify(prd),options);
        return resp;
    }

}