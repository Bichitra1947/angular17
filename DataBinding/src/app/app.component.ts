import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { VisitingCardComponent } from './visiting-card/visiting-card.component';
import { InputAppComponent } from './input-app/input-app.component';
import { Customer } from './Customer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BindingComponent,VisitingCardComponent,InputAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DataBinding';

  username="Bichitra";

  customerInput:Customer=new Customer();

  constructor(){
    this.customerInput.username="bichitra";
    this.customerInput.salary="50k";
    this.customerInput.title="Software developer";
    this.customerInput.department='2';
    this.customerInput.address=[
      "ligampally",
      "Hyderabad"
    ];
    this.customerInput.phone=[
      '111-1111-22222'
    ]
  
  }

}

