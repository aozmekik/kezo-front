import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {

  @Input() categories!: string[];
  @Input() desktop: boolean = true;
  readonly sliceSize = [0, 6, 12];

  constructor() { }

  ngOnInit(): void {
  }

}
