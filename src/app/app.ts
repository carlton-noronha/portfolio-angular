import { AfterViewInit, Component, DOCUMENT, Inject, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Theme } from './shared/services/theme';
import { BaseComponent } from './shared/components/BaseComponent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App extends BaseComponent implements AfterViewInit {
  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly renderer: Renderer2,
    private readonly themeService: Theme,
  ) {
    super(themeService);
  }

  ngAfterViewInit(): void {
    const body = this.document.body;
    this.renderer.addClass(body, this.themeStyles['bg-main']);
  }
}
