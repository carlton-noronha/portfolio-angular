import { Component } from '@angular/core';
import { MenuItem } from '../../app-types';
import { menuItems } from '../../constants';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuItems: MenuItem[] = menuItems;
}
