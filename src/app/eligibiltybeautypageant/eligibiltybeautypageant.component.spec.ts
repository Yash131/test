import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibiltybeautypageantComponent } from './eligibiltybeautypageant.component';

describe('EligibiltybeautypageantComponent', () => {
  let component: EligibiltybeautypageantComponent;
  let fixture: ComponentFixture<EligibiltybeautypageantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligibiltybeautypageantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibiltybeautypageantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
