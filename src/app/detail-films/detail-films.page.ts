import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../services/data.service';
@Component({
  selector: 'app-detail-films',
  templateUrl: './detail-films.page.html',
  styleUrls: ['./detail-films.page.scss'],
})
export class DetailFilmsPage implements OnInit {
  detail_films: any;

  constructor(private route: ActivatedRoute, private dataservice: DataService ) { }

  async ngOnInit() {
    this.route.paramMap.subscribe( async params => {
      let episode_id= params.get('episode_id')
      this.detail_films= await this.dataservice.GetData();
      this.detail_films=this.detail_films.results;
      this.detail_films = this.detail_films.filter(films => {
        return films.episode_id == episode_id
      })[0]
    })
    console.log(this.detail_films);
    
  }

}
