import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any[] = [];
  parentFunction(indexelement:any){
    this.data.splice(indexelement,1)
   }
  constructor(private user:DataService) { }
  
  ngOnInit(): void {
    
    this.user.getData().subscribe((data: any)=>{
      console.log(data)
      this.data=data
    })
    
  }

}
