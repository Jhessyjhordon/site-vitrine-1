import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  opened = false;

  log(state: string) {
    console.log(state);
  }

}
