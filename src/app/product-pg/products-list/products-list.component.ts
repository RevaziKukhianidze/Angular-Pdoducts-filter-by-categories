import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products/products.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  @Input()
  products: Products[] = [];

  constructor() {}

  ngOnInit(): void {}
}
