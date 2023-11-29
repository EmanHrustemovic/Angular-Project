import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/Homes.jpg" alt="logo" aria-hidden="true" width="100">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,

  //template: '<h1>Hello world!</h1>',
  
  styleUrls: ['./app.component.css'],
  /*imports: [
    HomeComponent,
  ]*/

})
export class AppComponent {
  title = 'first-app';
}
