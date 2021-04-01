import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    (document.querySelector('#black-bar') as HTMLElement).style.marginTop = `-${window.scrollY / 2}px`;
  }

}
