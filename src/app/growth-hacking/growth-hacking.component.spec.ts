import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthHackingComponent } from './growth-hacking.component';

describe('GrowthHackingComponent', () => {
  let component: GrowthHackingComponent;
  let fixture: ComponentFixture<GrowthHackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowthHackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowthHackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
