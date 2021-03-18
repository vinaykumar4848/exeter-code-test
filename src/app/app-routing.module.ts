import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { PostsComponent } from './components/posts/posts.component';


const routes: Routes = [
  {
    path:"posts",
    component:PostsComponent
  },
  {
    path:"comments",
    component:CommentsComponent
  },
  {
    path:"**",redirectTo:"/posts", pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
