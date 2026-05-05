import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-side-nav',
  imports: [RouterModule, MatListModule, MatIconModule, MatDividerModule],
  templateUrl: './side-nav.html',
})
export class SideNav { }
