

import { Component } from '@angular/core';
import { ThousandSeparatorPipe } from './thousandseparator.pipe.spec';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  userInput !: number;
  formattedNumber !: string;

  constructor(private thousandSeparator: ThousandSeparatorPipe) {}

  formatData() {
    this.formattedNumber = this.userInput ? this.thousandSeparator.transform(this.userInput) : '';
  }
}



