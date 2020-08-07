import { BrowserModule } from '@angular/platform-browser';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsRoutingModule } from './posts-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsFormComponent } from './components/posts-form/posts-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PostsListComponent, PostsFormComponent],
  imports: [
    CommonModule,
    BrowserModule,
    PostsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [],
})
export class PostsModule {}
