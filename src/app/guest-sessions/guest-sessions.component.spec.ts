import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestSessionsComponent } from './guest-sessions.component';

describe('GuestSessionsComponent', () => {
  let component: GuestSessionsComponent;
  let fixture: ComponentFixture<GuestSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
