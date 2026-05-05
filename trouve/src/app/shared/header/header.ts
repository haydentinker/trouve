import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDivider } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { LayoutService } from '../../core/layout.service';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [MatToolbarModule, MatDivider, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './header.html',
})
export class HeaderComponent {
  layout = inject(LayoutService);
}
