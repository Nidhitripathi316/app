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
import { BlogEntryComponent } from './module/blog-entry/blog-entry/blog-entry.component';
import { AboutUsComponent } from './module/about-us/about-us/about-us.component';
import {HeaderComponent} from './module/core/header/header.component';
import {FooterComponent} from './module/core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    HomeComponent,
    PostDetailsComponent,
    BlogEntryComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent
    
    
   
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
