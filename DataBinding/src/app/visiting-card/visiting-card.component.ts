import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-visiting-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visiting-card.component.html',
  styleUrl: './visiting-card.component.css'
})
export class VisitingCardComponent {
  name="Bichitra";


  users:any[]=[];

  public constructor(){

    this.users=[

      {
        username:"bichitra",
        title:'java devbeloper',
        salary:'60000',
        deparment:2,
        address:[
          'BTM',
          '500076',
          'bengaluru'
        ],
        phone:[
          '1111-222-333',
          '2222-2222-222'

        ]
      },
      {
        username:"Mohan",
        title:'software developer',
        salary:'70000',
        deparment:1,
        address:[
          'Lingampally',
          '500076',
          'Hyderabad'
        ],
        phone:[
          '1111-222-333',
          '2222-2222-222'

        ]
      }



    ]

  }

}
