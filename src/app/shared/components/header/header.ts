import { Component } from '@angular/core';
import { MenuItem } from '../../app-types';
import { menuItems } from '../../constants';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuOpened = false;
  menuItems: MenuItem[] = menuItems;

  constructor(private readonly router: Router) {}

  onClickMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }

  onClickMenuItem(selectedRoute: string) {
    if (!this.router.url.includes(selectedRoute)) {
      this.isMenuOpened = false;
    }
  }
}
