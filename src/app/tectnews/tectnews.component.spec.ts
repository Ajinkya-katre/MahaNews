import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TectnewsComponent } from './tectnews.component';

describe('TectnewsComponent', () => {
  let component: TectnewsComponent;
  let fixture: ComponentFixture<TectnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TectnewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TectnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
