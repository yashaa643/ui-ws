import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IplhomeComponent } from './iplhome.component';

describe('IplhomeComponent', () => {
  let component: IplhomeComponent;
  let fixture: ComponentFixture<IplhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IplhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IplhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
