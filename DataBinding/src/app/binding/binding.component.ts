import { Component } from '@angular/core';

@Component({
  selector: 'appBinding',
  standalone: true,
  imports: [],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  private userName:String="";
  private firstName:String="";
  private lastName:String="";
  private password:String="";
  private email:String="";
  private date:String="";

  status:boolean=true;
  text:String="This is my angular app";
  isError=false;
  link:string="https://example.com/image.jpg";
  newLink:string="/favicon-32x32.png";


  public constructor(){
    this.userName="Bichitra1947";
    this.firstName="Bichitra";
    this.lastName="Singha";
    this.password="Bichitra123";
    this.email="bichitra@gmail.com";

    setInterval(()=>{

      let currentData=new Date();
      this.date=currentData.toDateString();
      this.date=currentData.toTimeString();

    },1000)
  }


  getUser():String{
    return this.userName;
  }
  getFirst():String{
    return this.firstName;
  }
  getLast():String{
    return this.password;
  }
  getEmail():String{
    return this.email;
  }
  getDate():String{
    return this.date;
  }
}
