import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  template:
          `
          <h1>what is inline html
          `,
  // styleUrl: './app.component.css'
  styles:[`
  h1{
    color:yellow
  }

  `]
 

  
})
export class AppComponent {
  title = 'B.Tech';
}
