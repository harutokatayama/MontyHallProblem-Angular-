import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainMonitorComponent } from './main-monitor.component';

describe('MainMonitorComponent', () => {
  let component: MainMonitorComponent;
  let fixture: ComponentFixture<MainMonitorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
