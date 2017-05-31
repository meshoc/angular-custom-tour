import { HintService } from './hint.service';
import { Component } from '@angular/core';

@Component({
  selector: 'mm-hint',
  template: `<div class="hint-overlay" *ngIf="show"></div>`,
})
export class MmHintComponent {
  show: boolean;

  constructor(public hintService: HintService) {
    this.hintService.overlay$.subscribe(data => this.show = data);
  }

}
