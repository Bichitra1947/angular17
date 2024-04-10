import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { Customer } from '../Customer';

@Component({
  selector: 'app-input-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-app.component.html',
  styleUrl: './input-app.component.css'
})
export class InputAppComponent {


  users:any[]=[];
// @Input ('name') username:String="";

@Input ('inputObj') customerObj:Customer=new Customer();


constructor(){

}
ngOnInit(){
  this.users=[

    //JSON1
    {
      username:this.customerObj.username,
      title:this.customerObj.title,
      salary:this.customerObj.salary,
      department:this.customerObj.department,
      address:this.customerObj.address,
      
      phone:this.customerObj.phone

    },

     //JSON2
    // {
    //   username:'MOhan',
    //   title:'Software trainee',
    //   salary:'10000',
    //   department:1,
    //   address:[
    //               '2-2-222',
    //               'medipadnam',
    //               'Hyderabad'
    //          ],
      
    //   phones:[
    //           '333-333-3333',
    //           '444-444-4444'

    //         ]

    // }

    //JSON3


    //JSON4

  ]
}

}
