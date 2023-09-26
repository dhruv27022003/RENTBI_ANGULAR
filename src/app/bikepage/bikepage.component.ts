import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BikeService } from '../services/bike/bike.service';
import { CartService } from '../services/cart/cart.service';
import { bikes } from '../shared/models/bike';
@Component({
  selector: 'app-bikepage',
  templateUrl: './bikepage.component.html',
  styleUrls: ['./bikepage.component.css']
})
export class BikepageComponent implements OnInit {
  bike!: bikes;
 

  constructor(
private activatedRoute: ActivatedRoute,
private bikeservices: BikeService,
private CartService:CartService,
private router: Router,
  ) {
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.bike= bikeservices.getAllbikebyid(params['id'])
     }  )
   }

  ngOnInit(): void {
  }
 
  addToCart(){

    this.CartService.addToCart(this.bike);
    this.router.navigateByUrl('/cart-page');
  }

}
