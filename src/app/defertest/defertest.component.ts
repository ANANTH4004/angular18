import { Component } from '@angular/core';
import { DefercomComponent } from '../defercom/defercom.component';

@Component({
  selector: 'app-defertest',
  standalone: true,
  imports: [DefercomComponent],
  templateUrl: './defertest.component.html',
  styleUrl: './defertest.component.scss',
})
export class DefertestComponent {}
