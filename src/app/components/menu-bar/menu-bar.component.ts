import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  isSticky: boolean = false;

  @ViewChild('sidenav') sidenav!: MatSidenav;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 50;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (this.sidenav.opened && window.innerWidth >= 1200)
    {
      this.sidenav.toggle();
    }
  }


}
