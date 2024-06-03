import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, MatInputModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input()
  label: undefined | string = undefined;

  @Input()
  type: 'text' | 'password' = 'text';

  @Input()
  formControlName: any;

  @Input()
  placeholder: string = '';

  @Input()
  value: string | number = '';

  @Output()
  valueChange = new EventEmitter<typeof this.value>();

  changeInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.valueChange.emit(input.value);
  }
}
