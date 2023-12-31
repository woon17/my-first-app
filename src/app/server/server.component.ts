

// Component Decorator: Used to define an Angular component.
// It specifies the metadata for the component, including the selector,
// template or templateUrl, styles or styleUrls, and other configuration options.

import { Component } from "@angular/core";

// use export as we will use ServerComponent in other place
@Component({
  selector: 'app-server',
  // "./" notation typically represents the current directory
  templateUrl: './server.component.html',
  styles: [`
  .online{
    color: white
  }
  `]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
