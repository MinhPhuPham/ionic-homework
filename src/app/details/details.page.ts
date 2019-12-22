import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../services/data.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  listsings;
  detailSong: any;
  constructor(private dataService: DataService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const Id = params.get('Id');
      this.detailSong = this.listsings.find(sing => {
        return sing.Id === Id
      })[0]
    });
  }


}
