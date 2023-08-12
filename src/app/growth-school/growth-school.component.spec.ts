import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthSchoolComponent } from './growth-school.component';

describe('GrowthSchoolComponent', () => {
  let component: GrowthSchoolComponent;
  let fixture: ComponentFixture<GrowthSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowthSchoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowthSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
