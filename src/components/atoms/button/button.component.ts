import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input()
  color: 'primary' | 'warn' | 'accent' = 'primary';

  @Input()
  type: 'button' | 'submit' = 'button';

  @Output()
  onClick = new EventEmitter();

  click() {
    this.onClick.emit('a');
  }

  testViewChild() {
    console.log('testViewChild');
  }
}
