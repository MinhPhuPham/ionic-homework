import { Component } from '@angular/core';
import {DataService} from '../services/data.service';
import {ActivatedRoute} from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
data;
data_films;
  url: any;
  constructor(private dataservice: DataService, private route: ActivatedRoute) {}
  async ngOnInit(){
     this.data= await this.dataservice.GetData();
    this.data_films=this.data.results;
    this.url= this.data_films[0].url[0].slice(-4);
console.log(this.url);

  }
  //   grouped = this.data_films.reduce((groups, films_detail) => {
  //   const id = films_detail.url.slpit();
  
  //   groups[id] = groups[id] || [];
  //   groups[id].push(films_detail);
  
  //   return groups;
  // }, {});

}
