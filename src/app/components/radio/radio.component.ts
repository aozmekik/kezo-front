import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  @Input() label!: string;
  @Input() selectList: string[] = ['32', '34', '36', '38'];
  selectedIndex: number = 0;
  @Output() index: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(index: number) {
    this.selectedIndex = index;
    this.setIndex();
  }

  setIndex() {
    this.index.emit(this.selectedIndex);
  }

}
