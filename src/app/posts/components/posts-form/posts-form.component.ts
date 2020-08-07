import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from '../../post.interface';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Toaster } from 'ngx-toast-notifications';

@Component({
  selector: 'app-post-form',
  templateUrl: './posts-form.component.html',
})
export class PostsFormComponent implements OnInit {
  form: FormGroup;
  isEdit: boolean;
  postId: number;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: PostsService,
    private activatedRoute: ActivatedRoute,
    private toaster: Toaster
  ) {}

  ngOnInit() {
    this.createForm();
    this.activatedRoute.data.subscribe((data) => {
      if (data.isEdit) {
        this.isEdit = data.isEdit;
        this.loading = true;
        this.activatedRoute.params.subscribe((p) => {
          this.loading = false;
          this.postId = p.id;
          this.service
            .getSinglePost(+p.id)
            .subscribe((post: Post) => this.injectDataToForm(post));
        });
      }
    });
  }

  injectDataToForm(post) {
    this.form.patchValue(post);
  }

  createForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  submit() {
    this.loading = true;
    const formData: Post = {
      title: this.form.value.title,
      body: this.form.value.body,
    };
    // Todo: Interact with user with response.
    if (this.isEdit) {
      this.service.updatePost(this.postId, formData).subscribe(() => {
        this.loading = false;
        this.toaster.open('Post updated successfully!', {
          type: 'success',
          duration: 3000,
          position: 'top-right',
        });
      });
    } else {
      this.service.createPost(formData).subscribe(() => {
        this.loading = false;
        this.toaster.open('Post created successfully!', {
          type: 'success',
          duration: 3000,
          position: 'top-right',
        });
      });
    }
  }
}
