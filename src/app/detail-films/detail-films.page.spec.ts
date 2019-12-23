import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailFilmsPage } from './detail-films.page';

describe('DetailFilmsPage', () => {
  let component: DetailFilmsPage;
  let fixture: ComponentFixture<DetailFilmsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFilmsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailFilmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
