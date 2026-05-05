import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './shared/header/header';
import { SideNav } from './shared/side-nav/side-nav';
import { LayoutService } from './core/layout.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavModule, HeaderComponent, SideNav],
  templateUrl: './app.html',
})
export class App {
  layout = inject(LayoutService);
}
