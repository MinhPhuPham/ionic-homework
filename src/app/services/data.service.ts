import { Injectable } from '@angular/core';
import { sings } from '../../assets/data/data'
@Injectable({
  providedIn: 'root'
})
export class DataService {
listsings;
  constructor() { }

  ngOnInit() {
    this.listsings= sings.map((sings,i)=> sings);
  }
  getSongs(Id) {
    return { ...this.listsings.find(Song => {
      return Song.Id=Id;
    })
    };

  }
}
