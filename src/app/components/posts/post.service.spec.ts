import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostService } from './post.service';
import { HttpClientModule } from '@angular/common/http';

describe('PostService', () => {
  let injector: TestBed;
  let service: PostService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService,HttpClientModule]
    })
    .compileComponents();
    injector = getTestBed();
    service = TestBed.inject(PostService);
    httpMock=TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("should call show posts",()=>{
    const posts=[
      {
        id:1,
        title:"test",
        description:"desc"
      }
    ];
    service.showPosts()
    .subscribe((res:any)=>{
      expect(res.length).toBe(1);
      expect(res).toBe(posts);
    })
  })
});
