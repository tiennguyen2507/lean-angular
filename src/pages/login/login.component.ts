import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ButtonComponent } from '../../components/atoms/button/button.component';
import { InputComponent } from '../../components/atoms/input/input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ButtonComponent, InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  title: string = 'submit';

  @ViewChild('buttonRef', { static: true })
  private buttonRef!: ButtonComponent;

  login() {
    console.log('login-fc');
  }
}
