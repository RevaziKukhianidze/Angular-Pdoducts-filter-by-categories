import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categories } from 'src/app/models/categories/product-categories.model';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css'],
})
export class ProductCategoryComponent implements OnInit {
  categoryItem!: Categories;

  @Output() categoryItemEventEmitter = new EventEmitter<Categories>();

  @Input()
  categories: Categories[] = [];

  constructor() {}

  ngOnInit(): void {}

  onCategoriesClick(item: Categories) {
    this.categoryItem = item;
    this.categoryItemEventEmitter.emit(this.categoryItem);
  }
}
