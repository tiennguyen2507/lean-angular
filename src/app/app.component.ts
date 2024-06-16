import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../components/atoms/button/button.component';
import { InputComponent } from '../components/atoms/input/input.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/molecules/header/header.component';
import { FooterComponent } from '../components/molecules/footer/footer.component';
import { SidebarComponent } from '../components/atoms/sidebar/sidebar.component';

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
    SidebarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isShowMenu = false;

  @ViewChild('sideBar', { static: true })
  sideBarRef!: SidebarComponent;

  onClickMenu() {
    this.sideBarRef.toggleMenu();
  }
}
