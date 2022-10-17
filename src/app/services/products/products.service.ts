import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Products } from 'src/app/models/products/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}
  changeeventemiter: EventEmitter<void> = new EventEmitter();

  read(): Observable<Products[]> {
    let fullApiUrl = `${environment.serverBaseUrlForProducts}`;
    return this.httpClient.get<Products[]>(fullApiUrl);
  }
}
