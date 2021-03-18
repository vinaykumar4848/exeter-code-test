import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CommentService } from './comment.service';

describe('CommentService', () => {
  let injector: TestBed;
  let service: CommentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommentService]
    })
    .compileComponents();
    injector = getTestBed();
    service = TestBed.inject(CommentService);
    httpMock=TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call comments',()=>{
    const comments=[
      {
        id:1,
        name:"test",
        email:"test@gmail.com",
        description:"desc"
      }
    ];
    service.showComments()
    .subscribe((res:any)=>{
      expect(res.length).toBe(1);
      expect(res).toBe(comments);
    })
  })
});
