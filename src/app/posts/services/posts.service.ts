import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private _http: HttpClient) {}

  getPosts() {
    return this._http.get(`${environment.serverUrl}/posts`);
  }

  getSinglePost(postId) {
    return this._http.get(`${environment.serverUrl}/posts/${postId}`);
  }

  createPost(post) {
    return this._http.post(`${environment.serverUrl}/posts`, post);
  }

  updatePost(postId, post) {
    return this._http.put(`${environment.serverUrl}/posts/${postId}`, post);
  }

  deletePost(id) {
    return this._http.delete(`${environment.serverUrl}/posts/${id}`);
  }
}
