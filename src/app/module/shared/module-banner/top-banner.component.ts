import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.css']
})
export class TopBannerComponent implements OnInit {
  @Input() bannerTitle: string="";
  @Input() bannerDetail: string="";
  constructor() { 
  
  }

  ngOnInit(): void {
  }

}
