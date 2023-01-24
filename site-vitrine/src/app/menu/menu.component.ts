import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  events: string[] = [];
  opened!: boolean;

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
