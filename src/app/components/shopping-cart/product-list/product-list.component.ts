import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../../services/product.service";
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] =[]
  wishlist: number[] = []

  constructor(private ProductService: ProductService,
    private wishlistService: WishlistService) { }

  ngOnInit(){
      this.loadProducts();
      this.loadWishlist();

  }

    loadProducts(){
      this.ProductService.getProducts().subscribe((products)=>{
        this.productList = products;
      })
    }
    loadWishlist(){
      this.wishlistService.getWishlist().subscribe(productIds =>{

        this.wishlist = productIds
      })
    }

}
