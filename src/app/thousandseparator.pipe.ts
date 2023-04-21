import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandseparator'
})
export class ThousandseparatorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value !== null && value !== undefined) {
      let valString = value.toString();
      if(valString.charAt(0) === '-') {
        valString = '-' + valString.substr(1).replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,');
      } else {
        valString = valString.replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,');
      }
      return valString;
    }
    return null;
  }

}
