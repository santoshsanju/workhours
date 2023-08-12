import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructedByComponent } from './instructed-by.component';

describe('InstructedByComponent', () => {
  let component: InstructedByComponent;
  let fixture: ComponentFixture<InstructedByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructedByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
