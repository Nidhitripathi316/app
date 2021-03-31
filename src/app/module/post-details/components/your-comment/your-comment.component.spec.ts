import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourCommentComponent } from './your-comment.component';

describe('YourCommentComponent', () => {
  let component: YourCommentComponent;
  let fixture: ComponentFixture<YourCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
