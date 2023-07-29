import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // list all the components should be known to angular
  // start from main.ts, pass AppModule as a argument to bootstrapModule
  // in AppModule, we tell angular there is AppComponent for u to start urself
  // AppComponent has selector app-root, now angular can handle <app-root> in `index.html`
  // AppComponent has html, then display in UI
  bootstrap: [AppComponent]
})
export class AppModule { }
