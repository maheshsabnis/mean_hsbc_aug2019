import { Component, OnInit } from '@angular/core';
import { Category, Categories } from "./../../models/app.category.model";
@Component({
    selector: 'app-categorymaster-component',
    template: `
     <div>{{message}}</div>
      <table>
         <thead>
           <tr>
            <td>CatId</td>
            <td>CategoryName</td>
           </tr>
         </thead>
         <tbody>
           <tr *ngFor="let c of categories" (click)="getSelectedCat(c)">
             <td>{{c.CatId}}</td>
             <td>{{c.CategoryName}}</td>
           </tr>
         </tbody>
      </table>
      <hr/>
      <app-productchild-component [CatId]="cat.CatId" (notify)="receiveNotification($event)"></app-productchild-component>
    `
})
export class CategoryMasterComponent implements OnInit {
    categories = Categories;
    cat: Category;
    message: string;
    constructor() {
        this.cat = new Category(0, '');
    }
    getSelectedCat(c: Category): void {
        this.cat = c;
    }
    ngOnInit(): void { }
    // $event will contain data that is emitted by child component
    receiveNotification($event): void {
        this.message = $event;
    }
}
