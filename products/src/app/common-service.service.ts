import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  categories:any;
  subcategories:any;
  filtersub:any;
  filterpro:any;
  cid:string;
  scid:string;
  products:any;
  pid:string;
  amount:number =0 ;
  orders:object[] = [];
  bs:BehaviorSubject<any> = new BehaviorSubject<any>({});
  bs1:BehaviorSubject<any> = new BehaviorSubject<any>({});
  constructor(private http:HttpClient) { }

  callAjax1():Observable<any>{
    const url="https://raw.githubusercontent.com/anmolrajaroraa/NCU/master/categories.json";
    return this.http.get(url);
  }

  
  getCategories(){
    let obs:Observable<any> = this.callAjax1();
    obs.subscribe(data=>{
      this.categories = data;
      console.log(this.categories);
    },
    err=>{
      console.log('Category error is =',err);
    },
    ()=>{
      console.log('completed 1');
    });
  }

  callAjax2():Observable<any>{
    const url="https://raw.githubusercontent.com/anmolrajaroraa/NCU/master/subcategories.json";
    return this.http.get(url);
  }
  
  subFilter(){
    this.filtersub = this.subcategories.filter(
      item=>item.category_id === this.cid
    );
    console.log(this.filtersub);
  }

  remove(id:string){
    
  }

  productFilter(){
    this.filterpro = this.products.filter(
      item=>item.sub_category_id === this.scid
    );
    console.log(this.filterpro);
  }

  addOrders(){
    console.log('Orders 1:',this.orders);
    let obj = this.products.find(element => {
        if(element.product_id == this.pid){
          return element; 
        }
    });
    
    this.orders.push(obj);
    this.amount += parseInt(obj.price);
    console.log('amount ',this.amount);
    console.log('Orders 2:',this.orders);
  }

  getSubcategories(){
    let obs:Observable<any> = this.callAjax2();
    obs.subscribe(data=>{
      this.subcategories = data;
      console.log(this.subcategories);
    },
    err=>{
      console.log('Category error is =',err);
    },
    ()=>{
      console.log('completed 1');
    });
  }


  callAjax3():Observable<any>{
    const url="https://raw.githubusercontent.com/anmolrajaroraa/NCU/master/products.json";
    return this.http.get(url);
  }

  getProducts(){
    let obs:Observable<any> = this.callAjax3();
    obs.subscribe(data=>{
      this.products = data;
      
    },
    err=>{
      console.log('Category error is =',err);
    },
    ()=>{
      console.log('completed 1');
    });
  }

  getBS(){
    return this.bs;
  }

  getBS1(){
    return this.bs1;
  }
  
}
