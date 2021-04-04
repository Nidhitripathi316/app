import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './module/about-us/about-us/about-us.component';
import { HomeComponent } from './module/home/home/home.component';
import { BlogEntryComponent} from './module/blog-entries/blog-entries/blog-entries.component';
import { PostDetailsComponent } from './module/post-details/post-details/post-details.component';
import { ContactUsComponent } from './module/contact-us/contact-us/contact-us.component';
import { PageNotFoundComponent } from './module/core/page-not-found/page-not-found.component';
const routes: Routes = [
  {
    path:'', redirectTo:'/home', pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'about-us',component:AboutUsComponent
  },
  {
    path:'blog-entries',component:BlogEntryComponent
  },
  {
    path:'post-details',component:PostDetailsComponent
  },
  {
    path:'contact-us',component:ContactUsComponent
  },
  { path: '**', component:PageNotFoundComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
