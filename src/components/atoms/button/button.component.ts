import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input()
  color: 'primary' | 'warn' | 'accent' = 'primary';

  @Input()
  fullWidth: boolean = false;

  @Input()
  type: 'button' | 'submit' = 'button';

  @Input()
  category: 'flat' | 'icon' | 'raised' = 'flat';

  @Output()
  onClick = new EventEmitter();

  click() {
    this.onClick.emit();
  }
}
