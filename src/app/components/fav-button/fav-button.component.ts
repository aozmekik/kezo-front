import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-button',
  templateUrl: './fav-button.component.html',
  styleUrls: ['./fav-button.component.scss']
})
export class FavButtonComponent implements OnInit {
  isFav: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  clickFav() {
    this.isFav = !this.isFav;
  }
}
