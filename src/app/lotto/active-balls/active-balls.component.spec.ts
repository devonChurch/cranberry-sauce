import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveBallsComponent } from './active-balls.component';

describe('ActiveBallsComponent', () => {
  let component: ActiveBallsComponent;
  let fixture: ComponentFixture<ActiveBallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveBallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveBallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
