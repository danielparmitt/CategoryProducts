import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  constructor(private commonService:CommonServiceService) { }

  ngOnInit() {
    this.commonService.getCategories();
  }


  sendCID(id){
    let bs:BehaviorSubject<any> = this.commonService.getBS();
    bs.next({cid:id});
  }

}