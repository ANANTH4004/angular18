import { Routes } from '@angular/router';
import { ExcelComponent } from './excel/excel.component';
import { SignalParentComponent } from './signal-parent/signal-parent.component';

export const routes: Routes = [
  { path: 'excel', component: ExcelComponent },
  { path: 'parent', component: SignalParentComponent },
];
