import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})

// TODO. make favorite icon a component and reuse it.

export class ProductListItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
