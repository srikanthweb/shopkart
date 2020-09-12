import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


import {productsUrl} from '../../config/api';


import { Product } from '../models/product';


//const apiUrl = 'http://localhost:3000/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  
// products: Product[] = [
//   new Product(1, 'product1', 'this my first product description,it is kool', 100),
//   new Product(2, 'product2', 'this my second product description,it is kool', 200),
//   new Product(3, 'product3', 'this my third product description,it is kool', 300),
//   new Product(4, 'product4', 'this my fourth product description,it is kool', 400),
//   new Product(5, 'product5', 'this my fifth product description,it is kool', 500),
//   new Product(6, 'product6', 'this my sixth product description,it is kool', 600),
//   new Product(7, 'product7', 'this my fifth product description,it is kool', 500),
//   new Product(8, 'product8', 'this my fifth product description,it is kool', 500),
//   new Product(9, 'product9', 'this my sixth product description,it is kool', 600),
//   new Product(10, 'product10', 'this my sixth product description,it is kool', 600),
// ]


  constructor(private http: HttpClient) { }


  getProducts(): Observable<Product[]>{
    //ToDo: populate products from an API or local storage and return an observable
    return this.http.get<Product[]>(productsUrl);
  }
}
