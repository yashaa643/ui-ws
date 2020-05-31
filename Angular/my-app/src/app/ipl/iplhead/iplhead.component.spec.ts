import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IplheadComponent } from './iplhead.component';

describe('IplheadComponent', () => {
  let component: IplheadComponent;
  let fixture: ComponentFixture<IplheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IplheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IplheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
