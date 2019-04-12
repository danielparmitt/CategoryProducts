import { CommonServiceService } from './../common-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private commonService:CommonServiceService) { }

  ngOnInit() {
    
    this.commonService.getProducts();
    this.commonService.getBS1().subscribe(data=>{
      this.commonService.pid = data.pid;
      setTimeout(()=>{
        console.log('Orders are :',this.commonService.orders);
        this.commonService.addOrders();
        
      },0);
    });
    
  }

}
