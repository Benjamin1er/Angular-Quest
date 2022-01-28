import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bienvenue sur le site de Benjamin 1er';

  isVital: boolean = true;
  displayList: boolean = true;
  peopleThatMakeLists: string[] = ["Jericho", "Ryan", "Ben"];
}
