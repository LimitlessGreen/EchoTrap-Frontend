import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'EchoTrap-Frontend';

  buttonClicked() {
    alert('Wie geht es dir?');
  }
}
