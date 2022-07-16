import { Component, OnInit } from '@angular/core';
import { BikeService } from '../services/bike/bike.service';
import { bikes } from '../shared/models/bike';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  bikes:bikes[]=[];
  constructor( private fs: BikeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.route.params.subscribe(params=>{

       if(params['searchItem'])
       this.bikes= this.fs.getAll().filter(bike=>bike.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
       else if(params['tag'])
       this.bikes= this.fs.getAllbikebytag(params['tag'])
       else
       this.bikes=this.fs.getAll();

     })






   
  }
  

}
