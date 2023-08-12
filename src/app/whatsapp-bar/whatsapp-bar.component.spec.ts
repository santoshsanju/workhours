import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappBarComponent } from './whatsapp-bar.component';

describe('WhatsappBarComponent', () => {
  let component: WhatsappBarComponent;
  let fixture: ComponentFixture<WhatsappBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsappBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
