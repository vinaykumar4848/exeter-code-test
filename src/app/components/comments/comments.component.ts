import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments=[]

  constructor(private commentService:CommentService) { }

  ngOnInit(): void {
    this.commentService.showComments()
    .subscribe((res:any)=>{
      this.comments=res

    },
    err=>{

    })
  }

}
