import { NgModule } from '@angular/core';
import { PostCardComponent } from './components/post-card/post-card.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    TooltipModule.forRoot(),
    NgxLoadingModule.forRoot({}),
  ],
  declarations: [PostCardComponent, LoadingComponent],
  exports: [PostCardComponent, LoadingComponent],
})
export class SharedModule {}
