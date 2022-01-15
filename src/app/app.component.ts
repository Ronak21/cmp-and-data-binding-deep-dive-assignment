import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddElements = [];
  evenElements = [];

  onGameStarted(value: number) {
    if (value % 2 == 0) {
      this.evenElements.push(value);
    }
    else {
      this.oddElements.push(value);
    }
  }
}
