import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'counter';
  addc = true;
  countc = 0;
  add() {
    this.countc += 1;
  }
  remove() {
    this.countc -= 1;
  }
  reset() {
    this.countc = 0;
  }
}
