import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendUsMessageComponent } from './send-us-message.component';

describe('SendUsMessageComponent', () => {
  let component: SendUsMessageComponent;
  let fixture: ComponentFixture<SendUsMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendUsMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendUsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
