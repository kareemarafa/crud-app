import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsFormComponent } from './components/posts-form/posts-form.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: PostsListComponent },
  { path: 'add', component: PostsFormComponent },
  { path: 'edit/:id', component: PostsFormComponent, data: { isEdit: true } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
