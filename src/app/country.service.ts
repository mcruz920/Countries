import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = "https://restcountries.eu/rest/v2/";

export class Country{
  constructor(name:string,topLevelDomain:string,alpha2Code:string,alpha3Code:string,capital:string){
    this.name = name;
    this.topLevelDomain = topLevelDomain;
    this.alpha2Code = alpha2Code;
    this.alpha3Code = alpha3Code;
    this.capital = capital;
  }
  name:string;
  topLevelDomain:string;
  alpha2Code:string;
  alpha3Code:string;
  capital:string;
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countries = [];
  constructor(private http: HttpClient) { }
  
  getAllCountriesFromServer(): Observable<Country[]>{
    const url = apiUrl + "all";
    return this.http.get<Country[]>(url);
  }
  getCountryByNameFromServer(name:string):Observable<Country>{
    const url = apiUrl + `/name/${name}`

    return this.http.get<Country>(url);
  }
  getCountryByAlpha2CodeFromServer(alpha2Code:string):Observable<Country>{
    const url = apiUrl + `/alpha/${alpha2Code}`

    return this.http.get<Country>(url);
  }
  getCountryByAlpha3CodeFromServer(alpha3Code:string):Observable<Country>{
    const url = apiUrl + `/alpha/${alpha3Code}`

    return this.http.get<Country>(url);
  }

}
