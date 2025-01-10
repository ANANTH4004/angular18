import { Component } from '@angular/core';
import { SignalChildComponent } from '../signal-child/signal-child.component';

@Component({
  selector: 'app-signal-parent',
  standalone: true,
  imports: [SignalChildComponent],
  templateUrl: './signal-parent.component.html',
  styleUrl: './signal-parent.component.scss',
})
export class SignalParentComponent {
  valueToSend!: string;

  generateValue() {
    this.valueToSend = Math.random().toString();
  }
}
