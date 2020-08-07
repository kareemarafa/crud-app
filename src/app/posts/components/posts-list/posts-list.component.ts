import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../post.interface';
import { Toaster } from 'ngx-toast-notifications';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  loading = false;

  constructor(
    private service: PostsService,
    private router: Router,
    private toaster: Toaster
  ) {}

  ngOnInit() {
    this.getPosts();
  }

  postActions(event) {
    switch (event.type) {
      case 'edit':
        {
          this.navigateToEditPost(event.data);
        }
        break;
      case 'delete': {
        this.deletePost(event.data);
      }
    }
  }

  getPosts() {
    this.loading = true;
    this.service.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
      this.loading = false;
    });
  }

  navigateToAddPost() {
    this.router.navigate(['/add']);
  }

  navigateToEditPost(post) {
    this.router.navigate([`/edit/${post.id}`]);
  }

  deletePost(id) {
    this.loading = true;
    this.service.deletePost(id).subscribe(() => {
      this.loading = false;
      this.toaster.open('Post deleted successfully!', {
        type: 'success',
        duration: 3000,
        position: 'top-right',
      });
    });
  }
}
