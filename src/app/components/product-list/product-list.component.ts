import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  view: number = 1;
  numbers = Array(5).fill(0).map((x, i) => i);
  onDesktop = true;


  constructor() { }

  ngOnInit(): void {
    this.onResize(null);
  }

  changeView(view: number) {
    this.view = view;
    this.from4To3();

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.from4To3();

    if (this.isMedium())
      this.fromMobiletoDesktop();
    else
      this.view = 2;



  }

  from4To3() {
    if (!this.isLarge()) {
      if (this.view == 4)
        this.view = 3;
    }
  }

  fromMobiletoDesktop() {
    if (this.view == 1)
      this.view = 2;
    else if (this.view == 2 && !this.onDesktop)
      this.view = 3;

    if (this.view == 3 && this.isLarge())
      this.view = 4;
    this.onDesktop = true;
  }

  isMedium(): boolean {
    return window.innerWidth >= 768;
  }

  isLarge(): boolean {
    return window.innerWidth >= 992;
  }

}
