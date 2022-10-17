import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductPgComponent } from './product-pg/product-pg.component';
import { ProductCategoryComponent } from './product-pg/product-category/product-category.component';
import { ProductsListComponent } from './product-pg/products-list/products-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductPgComponent,
    ProductCategoryComponent,
    ProductsListComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
