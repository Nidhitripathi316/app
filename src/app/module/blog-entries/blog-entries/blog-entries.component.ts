import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-blog-entries',
  templateUrl: './blog-entries.component.html',
  styleUrls: ['./blog-entries.component.css']
})
export class BlogEntryComponent implements OnInit {
  data2: any[] = [];
  // data3:any;
  parentFunction(indexelement:any){
    this.data2.splice(indexelement,1)
   }
  constructor(private user2:DataService) { }

  ngOnInit(): void {
    this.user2.getData2().subscribe((data2: any)=>{
      console.log(data2)
      this.data2=data2
  })
  }
}


