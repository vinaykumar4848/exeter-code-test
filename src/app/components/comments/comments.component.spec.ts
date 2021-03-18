import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentService } from './comment.service';

import { CommentsComponent } from './comments.component';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;
  let service:CommentService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ],
      declarations: [ CommentsComponent ],
      providers:[CommentService,HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    service=TestBed.inject(CommentService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
});
