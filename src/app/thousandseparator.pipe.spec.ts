/* tslint:disable:no-unused-variable */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'thousandSeparator' })

export class ThousandSeparatorPipe implements PipeTransform {

  transform(value: any): string {

    if (value == null) return '';
    
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}