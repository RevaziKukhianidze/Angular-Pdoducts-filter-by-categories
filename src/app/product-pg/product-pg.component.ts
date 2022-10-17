import { Component, OnInit } from '@angular/core';
import { Categories } from '../models/categories/product-categories.model';
import { Products } from '../models/products/products.model';
import { ProductCategoriesService } from '../services/categories/product-categories.service';
import { ProductsService } from '../services/products/products.service';

@Component({
  selector: 'app-product-pg',
  templateUrl: './product-pg.component.html',
  styleUrls: ['./product-pg.component.css'],
})
export class ProductPgComponent implements OnInit {
  categoriesList: Categories[] = [];
  productsList: Products[] = [];
  productFilterredArray: Products[] = [];

  constructor(
    private categoryService: ProductCategoriesService,
    private prodService: ProductsService
  ) {}

  ngOnInit(): void {
    this.readAllCategories();
    this.readAllProducts();

    this.categoryService.changeEmitter.subscribe(() => {
      this.readAllCategories();
    });
    this.prodService.changeeventemiter.subscribe(() => {
      this.readAllProducts();
    });
  }

  readAllCategories() {
    this.categoryService.read().subscribe((resp: Categories[]) => {
      this.categoriesList = resp;
      console.log(this.categoriesList);
    });
  }
  readAllProducts() {
    this.prodService.read().subscribe((response: Products[]) => {
      this.productsList = response;
      this.productFilterredArray = this.productsList;
      console.log(this.productsList);
    });
  }

  oncategoryItemSubs(item: Categories) {
    console.log('on categorySubs', item);

    this.productFilterredArray = this.productsList.filter(
      (productItem) => productItem.ProductCategory.Name == item.Name
    );

    console.log('filteredArray', this.productFilterredArray);
  }
}
