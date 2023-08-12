import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoMentorsComponent } from './co-mentors.component';

describe('CoMentorsComponent', () => {
  let component: CoMentorsComponent;
  let fixture: ComponentFixture<CoMentorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoMentorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoMentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
