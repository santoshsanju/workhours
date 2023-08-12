import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramWorkComponent } from './program-work.component';

describe('ProgramWorkComponent', () => {
  let component: ProgramWorkComponent;
  let fixture: ComponentFixture<ProgramWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
