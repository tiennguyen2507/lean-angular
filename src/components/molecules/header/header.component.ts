import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MatIconModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output()
  onClickMenu = new EventEmitter();

  clickMenu() {
    this.onClickMenu.emit();
  }
}
