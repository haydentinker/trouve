import { Injectable, signal, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  private breakpoints = inject(BreakpointObserver);

  isMobile = signal(false);
  isOpen = signal(true);

  constructor() {
    this.breakpoints.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile.set(result.matches);
      this.isOpen.set(!result.matches);
    });
  }

  toggle() {
    this.isOpen.update(v => !v);
  }
}
