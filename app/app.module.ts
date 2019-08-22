import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleComponent } from './components/simplecomponent/app.simple.component';
import { ProductComponent } from './components/productcomponent/app.product.component';
import { CategoryMasterComponent } from './components/masterdetails/app.categorymaster.component';
import { ProductChildComponent } from './components/masterdetails/app.productchild.component';

@NgModule({
  declarations: [
    AppComponent, SimpleComponent, ProductComponent,
    CategoryMasterComponent, ProductChildComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [CategoryMasterComponent]
})
export class AppModule { }
