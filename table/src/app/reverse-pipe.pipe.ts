import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipePipe implements PipeTransform {

  transform(value:any): String {
    return Array.from(value).reverse().join();
  }

}
