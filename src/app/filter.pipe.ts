import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(technologyNames: any, term: any): any {
    if (term === undefined) {
      return technologyNames;
    }
    return technologyNames.filter(function (technologyName) {
      return technologyName.name.toLowerCase().includes(term.toLowerCase());
    });
  }

}
