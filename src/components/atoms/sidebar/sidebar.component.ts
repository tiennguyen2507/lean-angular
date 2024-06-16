import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule, MatDrawer } from '@angular/material/sidenav';
import { sidebarMenu } from './sidebar.constants';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatSidenavModule, MatButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.routePath = router.url;
    });
  }

  routePath = this.router.url;

  @ViewChild('drawer', { static: true })
  childComponent!: MatDrawer;

  sidebarMenu = sidebarMenu;

  toggleMenu() {
    this.childComponent.toggle();
  }
}
