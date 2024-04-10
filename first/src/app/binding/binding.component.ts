import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  private userName:String="";
  private firstName:String="";
  private lastName:String="";
  private email:String="";

  public constructor(){
    this.userName="Bichitra1947";
    this.firstName="Bichitra";
    this.lastName="Singha";
    this.email="bichitra@gmail.com"
  }

  getUsername():String{
    return this.userName;
  }
  getFirstName():String{
    return this.firstName;
  }
  getLastName():String{
    return this.lastName
  }
  getEmail():String{
    return this.email;
  }

}
