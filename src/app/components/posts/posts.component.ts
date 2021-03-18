import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts=[];

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.showPosts()
    .subscribe((res:any)=>{
      this.posts=res;

    },
    err=>{

    })
  }

}
