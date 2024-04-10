import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductDetailsComponent,CustomPipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'table';
}
