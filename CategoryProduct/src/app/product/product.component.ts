import { BehaviorSubject } from 'rxjs';
import { CommonServiceService } from './../common-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private commonService:CommonServiceService) { }

  ngOnInit() {
    this.commonService.getProducts();
    this.commonService.getBS().subscribe(data=>{
      this.commonService.cid = data.cid;
      this.commonService.scid = data.scid;
      setTimeout(()=>{
        this.commonService.productFilter();
      },0);
    },
    err=>{
      console.log(err);
    },
    ()=>{
      console.log('completed');
    });
  }

  sendPID(id){
    let bs:BehaviorSubject<any> = this.commonService.getBS1();
    bs.next({pid:id});
  }

}




