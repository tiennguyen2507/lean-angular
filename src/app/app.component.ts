import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../components/atoms/button/button.component';
import { InputComponent } from '../components/atoms/input/input.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { HeaderComponent } from '../components/molecules/header/header.component';
import { FooterComponent } from '../components/molecules/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ButtonComponent,
    InputComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-app';
  value = {
    email: '',
    password: '',
  };

  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    console.log('login summit', this.form.value);
  }
}
