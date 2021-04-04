import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
   @Input() img1:any;
   @Input() author1:string="";
   @Input() date1:any;
   @Input() para1a:string="";
   @Input() para1b:string="";
   @Input() para1c:string="";
   @Input() img2:any;
   @Input() author2:string="";
   @Input() date2:any;
   @Input() para2a:string="";
   @Input() para2b:string="";
   @Input() para2c:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
