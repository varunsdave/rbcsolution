import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRateViewerComponent } from './current-rate-viewer.component';

describe('CurrentRateViewerComponent', () => {
  let component: CurrentRateViewerComponent;
  let fixture: ComponentFixture<CurrentRateViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentRateViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentRateViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
