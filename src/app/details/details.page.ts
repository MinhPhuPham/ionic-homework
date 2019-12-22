import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../services/data.service';
import { sings } from '../../assets/data/data'

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  listsings=[...sings];
  detailSong: any;
  
  constructor(private dataService: DataService,private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe( params => {
      let Id = params.get('Id')
      this.detailSong = this.listsings.filter(student => {
        return student.Id === Id
      })[0]
    })
  
  }

}
