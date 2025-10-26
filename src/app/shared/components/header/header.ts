import { Component } from '@angular/core';
import { MenuItem } from '../../app-types';
import { menuItems } from '../../constants';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Theme, ThemeMode } from '../../services/theme';
import { BaseComponent } from '../BaseComponent';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header extends BaseComponent {
  isMenuOpened = false;
  menuItems: MenuItem[] = menuItems;

  constructor(
    private readonly router: Router,
    private readonly themeService: Theme,
  ) {
    super(themeService);
  }

  onClickMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }

  onClickMenuItem(selectedRoute: string) {
    if (!this.router.url.includes(selectedRoute)) {
      this.isMenuOpened = false;
    }
  }

  onChangeTheme(themeMode: ThemeMode) {
    this.prevThemeStyles = this.themeStyles;

    if (themeMode === 'dark') {
      this.themeMode = 'light';
    }

    if (themeMode === 'light') {
      this.themeMode = 'dark';
    }
  }
}
