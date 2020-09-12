import { Component, OnInit, Input } from '@angular/core';
import {Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { WishlistService } from "../../../../services/wishlist.service";
@Component({
  selector: 'app-prodect-item',
  templateUrl: './prodect-item.component.html',
  styleUrls: ['./prodect-item.component.css']
})
export class ProdectItemComponent implements OnInit {

  @Input() productItem: Product;


   @Input() addedToWishlist: boolean;

  constructor( private msg: MessengerService,
     private cartservice: CartService,
     private wishlistService: WishlistService


    ) { }
 
  ngOnInit(): void {
  }
  handleAddToCart(){

    this.cartservice.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })
  }
    handleAddToWishlist(){
        this.wishlistService.addToWishlist(this.productItem.id).subscribe(()=>{
          this.addedToWishlist = true;
        })
    }

    handleRemoveFromWishlist(){
      this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(()=>{
        this.addedToWishlist= false;
      })

    }

}
