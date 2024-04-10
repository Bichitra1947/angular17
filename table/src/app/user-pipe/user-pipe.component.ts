import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipePipe } from "../reverse-pipe.pipe";

@Component({
    selector: 'app-user-pipe',
    standalone: true,
    templateUrl: './user-pipe.component.html',
    styleUrl: './user-pipe.component.css',
    imports: [CommonModule,ReversePipePipe]
})
export class UserPipeComponent {

  var_name="Bichitra";
  var_obj={
    id:101,
    name:"mohan",
    from:"india"
  }

}
