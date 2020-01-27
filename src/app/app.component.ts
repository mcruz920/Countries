import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CountryService, Country } from './country.service';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  countries: Country[] = [];
  filterText ="";
  @Input() country: Country;
  @Input() i:number;
  countriesSub: Subscription;
  countryBeingDisplayed: Country;

  constructor(private srv : CountryService, private http: HttpClient){
  }

  ngOnInit(){
    this.getCountriesFromServer();
  }
  ngOnDestroy(){
    if(this.countriesSub){
      this.countriesSub.unsubscribe();
    }
  }

getCountriesFromServer(){
  this.countriesSub = this.srv.getAllCountriesFromServer()
  .subscribe(
    (res: Country[])=>{
      console.log('country res ', res);
      this.countries =res;
    },
    err => { console.error(err);},
    () => { }
  );
}
  title = 'Countries';
}
