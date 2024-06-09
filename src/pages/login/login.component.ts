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

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  title: string = 'submit';

  @ViewChild('buttonRef', { static: true })
  private buttonRef!: ButtonComponent;

  login() {
    this.buttonRef.testViewChild();
  }
}
