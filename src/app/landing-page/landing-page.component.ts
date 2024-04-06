import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  currentComponent: string = 'landingComponent';

  currentComponentFooterText: string = 'Predmeti';

  toggleComponent(): void {
    // this.currentComponent =
    //   this.currentComponent === 'landingComponent'
    //     ? 'mainClassesComponent'
    //     : 'landingComponent';
    if (this.currentComponent === 'landingComponent') {
      this.currentComponent = 'mainClassesComponent';
      this.currentComponentFooterText = 'O nama';
      console.log(this.currentComponent, this.currentComponentFooterText);
    } else {
      this.currentComponent = 'landingComponent';
      this.currentComponentFooterText = 'Predmeti';
      console.log(this.currentComponent, this.currentComponentFooterText);
    }
  }
}
