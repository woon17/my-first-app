import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // data binding. title and developer can be used in html
  title = 'my-first-app';
  developer = 'shufa';
}