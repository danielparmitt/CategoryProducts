import { BehaviorSubject } from 'rxjs';
import { CommonServiceService } from './../common-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  constructor(private commonService:CommonServiceService) { }

  ngOnInit() {
    this.commonService.getSubcategories();
    this.commonService.getBS().subscribe(data=>{
      this.commonService.cid = data.cid;
      setTimeout(()=>{
        this.commonService.subFilter();
      },0);
    },
    err=>{
      console.log('Subcategory subscribe error is = ',err);
    },
    ()=>{
      console.log('completed2');
    });  
  }

  sendSCID(id1,id2){
    let bs:BehaviorSubject<any> = this.commonService.getBS();
    bs.next({cid:id1,scid:id2});
  }

}
