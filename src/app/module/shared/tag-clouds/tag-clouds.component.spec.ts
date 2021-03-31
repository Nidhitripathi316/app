import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagCloudsComponent } from './tag-clouds.component';

describe('TagCloudsComponent', () => {
  let component: TagCloudsComponent;
  let fixture: ComponentFixture<TagCloudsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagCloudsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagCloudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
