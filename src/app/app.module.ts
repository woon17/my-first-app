import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

// @NgModule: The @NgModule decorator is used to define an Angular module.
// It specifies the metadata for the module,
// including the declarations, imports, exports, providers, and other settings.
@NgModule({
  // This property is an array that includes the components, directives, and pipes that belong to this module.
  declarations: [
    AppComponent,
    ServerComponent
  ],
  // This property is an array of other modules that this module depends on.
  // You can import modules from Angular's standard library or custom modules created in your application.
  imports: [
    BrowserModule
  ],
  // This property is an array that includes the services that are available in the injector of this module.
  // Services added here are scoped to the module, meaning each instance of the service is unique within this module's context.
  providers: [],
  // list all the components should be known to angular
  // start from main.ts, pass AppModule as a argument to bootstrapModule
  // in AppModule, we tell angular there is AppComponent for u to start urself
  // AppComponent has selector app-root, now angular can handle <app-root> in `index.html`
  // AppComponent has html, then display in UI
  bootstrap: [AppComponent]
})
export class AppModule { }
