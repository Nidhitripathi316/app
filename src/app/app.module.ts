import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import { ContactUsComponent } from './module/contact-us/contact-us/contact-us.component';
import { HomeComponent } from './module/home/home/home.component';
import { PostDetailsComponent } from './module/post-details/post-details/post-details.component';
import { BlogEntryComponent } from './module/blog-entries/blog-entries/blog-entries.component';
import { AboutUsComponent } from './module/about-us/about-us/about-us.component';
import {HeaderComponent} from './module/core/header/header.component';
import {FooterComponent} from './module/core/footer/footer.component';
import {CarouselComponent} from './module/home/carousel/carousel.component';
import {TemplateBlogComponent} from './module/shared/template-blog/template-blog.component';
import{TopBannerComponent} from './module/shared/module-banner/top-banner.component';
import { PageNotFoundComponent } from './module/core/page-not-found/page-not-found.component';
import { SendUsMessageComponent } from './module/contact-us/components/send-us-message/send-us-message.component';
import { ContactInformationComponent } from './module/contact-us/components/contact-information/contact-information.component';
import { GeoMapComponent } from './module/contact-us/components/geo-map/geo-map.component';
import { ContentDetailComponent} from './module/about-us/content-detail/content-detail.component';
import { BriefDescriptionComponent} from './module/about-us/brief-description/brief-description.component';
import { PostComponent } from './module/shared/post/post.component';
import { RecentPostComponent} from './module/shared/recent-post/recent-post.component';
import { BlogPostComponent } from './module/post-details/components/blog-post/blog-post.component';
import { CommentComponent } from './module/post-details/components/comment/comment.component';
import { YourCommentComponent } from './module/post-details/components/your-comment/your-comment.component';
import { BlogPostsComponent } from './module/blog-entries/components/blog-posts/blog-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    HomeComponent,
    PostDetailsComponent,
    BlogEntryComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    TemplateBlogComponent,
    TopBannerComponent,
    PageNotFoundComponent,
    SendUsMessageComponent,
    ContactInformationComponent,
    GeoMapComponent,
    ContentDetailComponent,
    BriefDescriptionComponent,
    PostComponent,
    RecentPostComponent,
    BlogPostComponent,
    CommentComponent,
    YourCommentComponent,
    BlogPostsComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
