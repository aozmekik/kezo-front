import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})


//FIXME. maybe fix shadow on nav-bar box.

export class MenuBarComponent implements OnInit {
  isSticky: boolean = false;
  show: boolean = false;
  sideShow: boolean = false;

  @ViewChild('sidenav') sidenav!: MatSidenav;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 50;

    // this is a workaround for dropdowns.
    if (this.isSticky)
      (document.querySelector('.dropdown-content') as HTMLElement).style.marginTop = '0';
    else {
      (document.querySelector('.dropdown-content') as HTMLElement).style.marginTop = `-${window.scrollY}px`;
    }


    console.log(window.scrollX, window.scrollY);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (this.sidenav.opened && window.innerWidth >= 1200) {
      this.sidenav.toggle();
    }
  }

  toggleMenu()
  {
    this.sideShow = !this.sideShow;
  }


}
