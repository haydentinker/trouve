import { Routes } from '@angular/router';
import { NewScanComponent } from './pages/new-scan/new-scan';
import { ScanHistoryComponent } from './pages/scan-history/scan-history';
import { SavedComponent } from './pages/saved/saved';
import { OutfitBuilderComponent } from './pages/outfit-builder/outfit-builder';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { MarketTrendsComponent } from './pages/market-trends/market-trends';

export const routes: Routes = [
  { path: '', redirectTo: 'new-scan', pathMatch: 'full' },
  { path: 'new-scan', component: NewScanComponent },
  { path: 'scan-history', component: ScanHistoryComponent },
  { path: 'saved', component: SavedComponent },
  { path: 'outfit-builder', component: OutfitBuilderComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'market-trends', component: MarketTrendsComponent },
];
