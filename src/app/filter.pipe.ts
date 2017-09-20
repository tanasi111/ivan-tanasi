import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Array<any>, nameSearch: string, typeSearch: string) {
    if (items && items.length) {
      return items.filter(item => {
        if (nameSearch && item.name.toLowerCase().indexOf(nameSearch.toLowerCase()) === -1) {
          return false;
        }
        if (typeSearch && item.type.toLowerCase().indexOf(typeSearch.toLowerCase()) === -1) {
          return false;
        }
        return true;
      });
    }
  }
}
