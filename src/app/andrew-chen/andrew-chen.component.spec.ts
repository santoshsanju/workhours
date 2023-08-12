import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndrewChenComponent } from './andrew-chen.component';

describe('AndrewChenComponent', () => {
  let component: AndrewChenComponent;
  let fixture: ComponentFixture<AndrewChenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndrewChenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndrewChenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
