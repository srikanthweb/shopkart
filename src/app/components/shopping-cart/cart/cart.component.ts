import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cartItems =[  
 // {id: 1, productId: 1, productName: 'Test1', qty:5, price:200},
  //{id: 2, productId: 2, productName: 'Test2', qty:3, price:1200},
  //{id: 3, productId: 3, productName: 'Test3', qty:6, price:2200},
  //{id: 4, productId: 4, productName: 'Test4', qty:4, price:800},
];

cartTotal = 0;

  constructor(
    private msg: MessengerService,
    private cartService: CartService) { }
 
  ngOnInit(): void {
    this.handleSubscription(); 
    
  }  

  handleSubscription(){
    this.msg.getMsg().subscribe((product: Product)=>{
      this.loadCartItems(); 
      
      
      })
   }

   loadCartItems(){
     this.cartService.getCartItems().subscribe((items: CartItem[]) =>{
      this.cartItems = items;
      this.calcCartTotal();
      })
   }
      calcCartTotal(){
        this.cartTotal = 0
          this.cartItems.forEach(item =>{
          this.cartTotal += (item.qty * item.price)
          })
      }
}
  

    // addProductToCart(product: Product) {
    //   let productExists = false

    //   for(let i in this.cartItems){
    //     if(this.cartItems[i].productId === product.id){
    //       this.cartItems[i].qty++
    //       productExists = true
    //       break;
    //     }
    //   }
    //     if(!productExists){
    //       this.cartItems.push({
    //         productId: product.id,
    //         productName: product.name,
    //         qty:1,
    //         price: product.price
    //       })
    //     }
    //     this.calcCartTotal();
    // }


// if( this.cartItems.length === 0 ){
        // this.cartItems.push({
        //   productId: product.id,
        //   productName: product.name,
        //   qty:1,
        //   price: product.price
        // })
      // }
      // else{
        // for(let i in this.cartItems){
        //   if(this.cartItems[i].productId === product.id){
        //     this.cartItems[i].qty++
        //     break;
        //   }
      //     else{
      //       this.cartItems.push({
      //         productId: product.id,
      //         productName: product.name,
      //         qty:1,
      //         price: product.price
      //       })
      //     }
      //   }      


    //

