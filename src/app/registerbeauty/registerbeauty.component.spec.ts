import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterbeautyComponent } from './registerbeauty.component';

describe('RegisterbeautyComponent', () => {
  let component: RegisterbeautyComponent;
  let fixture: ComponentFixture<RegisterbeautyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterbeautyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterbeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
