import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  childData = 'Balaji';
  @Input()
  parentDataInChild = '';

  @Output()
  sendToParent = new EventEmitter<string>();

  sendDataToParent = () => {
    this.sendToParent.emit(this.childData);
  };

}
