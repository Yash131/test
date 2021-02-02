import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilitybabypageantComponent } from './eligibilitybabypageant.component';

describe('EligibilitybabypageantComponent', () => {
  let component: EligibilitybabypageantComponent;
  let fixture: ComponentFixture<EligibilitybabypageantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligibilitybabypageantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibilitybabypageantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
