import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { cartUrl } from 'src/config/api';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
getCartItems(): Observable<CartItem[]>{
  //TODO: Mapping the obtained result to our CartItem props.(pipe() and map() used)
  return this.http.get<CartItem[]>(cartUrl).pipe(
    map((result: any[]) =>{
      let cartItems: CartItem[]= [];
      for(let item of result){
        let productExists = false

      for(let i in cartItems){
        if(cartItems[i].productId === item.product.id){
          cartItems[i].qty++
          productExists = true
          break;
        }
      }
        if(!productExists){
          cartItems.push(new CartItem(item.id, item.product));
        }
      }
      return cartItems;
    })
  );
}

addProductToCart(product: Product): Observable<any> {
   return this.http.post(cartUrl, { product });
}

}
