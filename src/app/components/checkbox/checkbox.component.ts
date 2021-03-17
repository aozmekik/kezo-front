import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() label: string = ' ';
  @Output() checkedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  public isChecked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setChecked() {
    this.checkedEvent.emit(this.isChecked);
  }

}
