import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Product } from "./../models/app.product.model";
// the Observable stored the Promise Responses before delivering to component
import { Observable } from "rxjs";
@Injectable()
export class HttpService {

    url: string;

    // inject the Http object. The instance of this
    // will be provided by @angular/http and its HttpModule class
    // The HttpModule class must be imported in import:[] of NgModule  
    constructor(private http: Http) { 
        this.url = 'http://localhost:9009';
    }
    getData(): Observable<Response> {
        let res: Observable<Response> = null;
          // settings the header with header values
          let headers: Headers = new Headers({'AUTHORIZATION':'Basic mahesh:mahesh'});
          // defining the RequestOptions for Post Request
          let options:RequestOptions = new RequestOptions();
          options.headers = headers;
  
        res = this.http.get(`${this.url}/api/products`, options);
        return res;
    }

    postData(prd: Product): Observable<Response> {
        let res: Observable<Response> = null;
        // settings the header with header values
        let headers: Headers = new Headers({'Content-Type':'application/json'});
        // defining the RequestOptions for Post Request
        let options:RequestOptions = new RequestOptions();
        options.headers = headers;

        res = this.http.post(`${this.url}/api/products`, JSON.stringify(prd),options);

        return res;
    }

    putData(id:number, prd: Product): Observable<Response> {
        let res: Observable<Response> = null;
        // settings the header with header values
        let headers: Headers = new Headers({'Content-Type':'application/json'});
        // defining the RequestOptions for Post Request
        let options:RequestOptions = new RequestOptions();
        options.headers = headers;
        res = this.http.put(`${this.url}/api/products/${id}`, JSON.stringify(prd),options);
        return res;
    }
    deleteData(id:number): Observable<Response> {
        res = this.http.delete(`${this.url}/api/products/${id}`);
        return res;
    }

}