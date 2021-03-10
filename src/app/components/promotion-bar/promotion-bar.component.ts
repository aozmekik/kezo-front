import { Component, HostListener, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SlideInOutAnimation } from './slide-in-out-animation';

@Component({
  selector: 'app-promotion-bar',
  templateUrl: './promotion-bar.component.html',
  styleUrls: ['./promotion-bar.component.scss'],
  animations: [SlideInOutAnimation]
})

export class PromotionBarComponent implements OnInit {
  public animationState: String = 'out';
  public disabled: boolean = true;
  private readonly lg = 992;

  constructor() { }
  ngOnInit(): void {
    this.checkWindowSize();
  }

  toggleDropDown() {
    this.animationState = this.animationState === 'out' ? 'in' : 'out';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWindowSize();
  }

  private checkWindowSize() {
    this.disabled = window.innerWidth < this.lg ? false : true;
    if (window.innerWidth >= this.lg && this.animationState === 'in')
      this.toggleDropDown();
  }
}
