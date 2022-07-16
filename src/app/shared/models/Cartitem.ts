import { bikes } from "./bike";

export class Cartitem{
      static Cartitem: any;
  bikes: any;
      

      constructor(public bike:bikes){ }

      
      quantity: number=1;
      price: number = this.bike.price;
}