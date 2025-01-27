import { Routes } from '@angular/router';
import { ExcelComponent } from './excel/excel.component';
import { SignalParentComponent } from './signal-parent/signal-parent.component';
import { DefertestComponent } from './defertest/defertest.component';

export const routes: Routes = [
  { path: 'excel', component: ExcelComponent },
  { path: 'parent', component: SignalParentComponent },
  { path: 'defer', component: DefertestComponent },
];
