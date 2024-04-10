import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-pipe.component.html',
  styleUrl: './custom-pipe.component.css'
})
export class CustomPipeComponent {

  var_one:string="bichitra mohan singha ";

  datetime:Date=new Date();

  public person={
    id:101,
    name:"mohan",
    state:"Tripura"
  }

  var_two:number=.12;

}
