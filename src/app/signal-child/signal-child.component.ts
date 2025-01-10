import { Component, model, ModelSignal } from '@angular/core';

@Component({
  selector: 'app-signal-child',
  standalone: true,
  imports: [],
  templateUrl: './signal-child.component.html',
  styleUrl: './signal-child.component.scss',
})
export class SignalChildComponent {
  valueFromParent: ModelSignal<string> = model.required();

  changeValueInChild() {
    this.valueFromParent.update((value) => Math.random().toString());
  }
}
