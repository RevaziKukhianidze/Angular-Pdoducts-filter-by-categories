import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Categories } from 'src/app/models/categories/product-categories.model';

@Injectable({
  providedIn: 'root',
})
export class ProductCategoriesService {
  constructor(private httpClient: HttpClient) {}

  changeEmitter: EventEmitter<void> = new EventEmitter();

  read(): Observable<Categories[]> {
    let fullApiUrl = `${environment.serverBaseUrl}`;
    return this.httpClient.get<Categories[]>(fullApiUrl);
  }
}
