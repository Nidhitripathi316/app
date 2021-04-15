import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  // @Input() image1:any;
  // @Input() title1:string="";
  // @Input() anchor1a:string="";
  // @Input() date:string="";
  // @Input() comment:string="";
  // @Input() para1:string="";
  // @Input() anchor1b:string="";
  // @Input() para1_remain:string="";
  // @Input() tage1a:string="";
  // @Input() tage1b:string="";
  @Input()  indexelement:any;
  @Output() parentFunction= new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }
  deleteData(selected:any){
    this.parentFunction.emit(this.indexelement)
    }
}
