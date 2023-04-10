import { Component, OnInit } from '@angular/core';
declare var reInintOwlCarousel:any;
@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent  {

  
 

  ngAfterViewInit() {
    reInintOwlCarousel();
  }

}
