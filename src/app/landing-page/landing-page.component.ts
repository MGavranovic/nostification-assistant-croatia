import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  currentComponent: string = 'landingComponent';
  showComponent: boolean = true;

  toggleComponent(): void {
    this.currentComponent =
      this.currentComponent === 'landingComponent'
        ? 'mainClassesComponent'
        : 'landingComponent';
  }
}
