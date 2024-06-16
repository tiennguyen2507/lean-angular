import { Component, Input, Output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule, MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @ViewChild('drawer', { static: true })
  childComponent!: MatDrawer;

  toggleMenu() {
    this.childComponent.toggle();
  }
}
