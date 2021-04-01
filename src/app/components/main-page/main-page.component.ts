import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  @ViewChild('first') firstImage!: ElementRef;

  readonly RATIO: number = 2.24;

  constructor() { }

  ngOnInit(): void {
    this.onResize(null);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    var height = window.innerWidth / this.RATIO;
    console.log(height);
    (document.querySelector('#black-bar') as HTMLElement).style.marginTop = `${height - 100}px`;
  }

}
