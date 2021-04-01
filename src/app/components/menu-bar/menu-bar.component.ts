import { CategoryService } from './../../services/category.service';
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
  firstSticked: boolean = false;
  show: boolean = false;
  sideShow: { [id: string]: boolean; } = {};

  categoryDict: any;
  mainCategory: Array<string> = Array<string>();


  @ViewChild('sidenav') sidenav!: MatSidenav;
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
    for (let key in this.categoryDict) {
      this.mainCategory.push(key);
    }
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 50;

    // this is a workaround for dropdowns.
    if (this.isSticky)
      document.querySelectorAll('.dropdown-content').forEach(e => (e as HTMLElement).style.marginTop = '-5px');
    else
      document.querySelectorAll('.dropdown-content').forEach(e => (e as HTMLElement).style.marginTop = `-${window.scrollY + 5}px`);

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (this.sidenav.opened && window.innerWidth >= 1200) {
      this.sidenav.toggle();
    }
  }

  toggleMenu(key: string) {
    this.sideShow[key] = !this.sideShow[key];
  }

  getCategories(): void {
    this.categoryDict = this.categoryService.getCategories();
  }


}
