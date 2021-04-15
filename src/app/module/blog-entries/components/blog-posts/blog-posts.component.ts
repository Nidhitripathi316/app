import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {
  // @Input() image1:any;
  // @Input() authorname1:string="";
  // @Input() date1:any;
  // @Input() comment1:any;

  // @Input() image2:any;
  // @Input() authorname2:string="";
  // @Input() date2:any;
 @Input()  indexelement:any;
 @Output() parentFunction= new EventEmitter<any>();
 
  constructor() { }

  ngOnInit(): void {
    
  }
   deleteData(selected:any){
   this.parentFunction.emit(this.indexelement)
   }
  
  }



