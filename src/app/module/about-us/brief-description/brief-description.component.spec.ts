import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefDescriptionComponent } from './brief-description.component';

describe('BriefDescriptionComponent', () => {
  let component: BriefDescriptionComponent;
  let fixture: ComponentFixture<BriefDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriefDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
