import { Pipe, PipeTransform } from '@angular/core';
import {Country} from './country.service';

@Pipe({
  name: 'countrySearch'
})
export class CountryPipe implements PipeTransform {

  transform(value: Country[], filterText: string): any {
    return  value.filter((country:Country)=>{
      if(country.name && country.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()) || 
      country.alpha2Code && country.alpha2Code.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()) ||
      country.alpha3Code && country.alpha3Code.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())){
        return true;
      }
      return false;
    });
  }

}
