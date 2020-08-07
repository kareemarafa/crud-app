import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../../posts/post.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
})
export class PostCardComponent {
  @Input() post: Post;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();
}
