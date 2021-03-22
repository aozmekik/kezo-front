import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  index = 1;

  imgs: Array<string> = Array<string>();

  sizes: string[] = ['32', '34', '36', '38'];
  

  config: SwiperConfigInterface = {
    loop: true,
    pagination: {
      el: '#cpage',
      clickable: true,
      hideOnClick: false
    }

  };

  constructor() { }

  ngOnInit(): void {
    this.imgs.push('assets/1.jpg');
    this.imgs.push('assets/2.jpg');
  }

}
