import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-recent-post',
  templateUrl: './recent-post.component.html',
  styleUrls: ['./recent-post.component.css']
})
export class RecentPostComponent implements OnInit {
  data: any[] = [];
  recentcontent:any;
  // parentFunction(indexelement:any){
  //   this.data.filter((indexelement)=> indexelement < 2)
  //  }
  constructor(private user:DataService) { }

  ngOnInit(): void {
    this.user.getData().subscribe((data: any)=>{
      console.log(data)
      this.data=data
    });
  }
  Search(){
    if(this.recentcontent == ""){
      this.ngOnInit();
    }else{
      this.data=this.data.filter((res:any)=>{
        return res.recentcontent.toLocaleLowerCase().match(this.recentcontent.toLocaleLowerCase());
      });
    }
  }
}
