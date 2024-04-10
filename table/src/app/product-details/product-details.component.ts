import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  products:any[]=[];

  public constructor(){

    this.products=[
      {productid:101 , productname:"iphone", price:15000, category:"phone", expDate:"12-12-2030",  manfacture:"apple"},
      {productid:102 , productname:"Sumsung", price:12000, category:"phone", expDate:"12-12-2029",  manfacture:"Sumsung"},
      {productid:103 , productname:"+onePlue", price:70000, category:"phone", expDate:"12-12-2031",  manfacture:"oneplue"}
    ]

  }

  public getAllData(){
    this.products=[
      {productid:101 , productname:"iphone", price:15000, category:"phone", expDate:"12-12-2030",  manfacture:"apple"},
      {productid:102 , productname:"Sumsung", price:12000, category:"phone", expDate:"12-12-2029",  manfacture:"Sumsung"},
      {productid:103 , productname:"+onePlue", price:70000, category:"phone", expDate:"12-12-2031",  manfacture:"oneplue"},
      {productid:104 , productname:"MI", price:40000, category:"phone", expDate:"12-12-2027",  manfacture:"Xiaami"},
      {productid:104 , productname:"MI", price:40000, category:"phone", expDate:"12-12-2027",  manfacture:"Xiaami"}
    ]
  }

  public trackByProductCode(product:any){
    return product.any;
  }

}
