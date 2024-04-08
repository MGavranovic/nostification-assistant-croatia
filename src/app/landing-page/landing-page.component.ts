import { Component, OnDestroy } from '@angular/core';
import { ContentToggleService } from '../shared/content-switch.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnDestroy {
  subscription: Subscription;
  landingPageVisible: boolean = true;
  mainClassesVisible: boolean = false;

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
      this.landingPageVisible = false;
      this.mainClassesVisible = true;
      console.log(
        this.currentComponent,
        this.landingPageVisible,
        this.mainClassesVisible
      );
    } else {
      this.currentComponent = 'landingComponent';
      this.currentComponentFooterText = 'Predmeti';
      this.landingPageVisible = true;
      this.mainClassesVisible = false;
      console.log(
        this.currentComponent,
        this.landingPageVisible,
        this.mainClassesVisible
      );
    }
  }

  constructor(private toggleService: ContentToggleService) {
    this.subscription = this.toggleService.toggle$.subscribe(
      (componentName) => {
        if (componentName === 'landingComponent') {
          this.currentComponent = 'landingComponent';
          this.currentComponentFooterText = 'Predmeti';
          this.landingPageVisible = true;
          this.mainClassesVisible = false;
          console.log(
            this.currentComponent,
            this.landingPageVisible,
            this.mainClassesVisible
          );
        } else if (componentName === 'mainClassesComponent') {
          this.currentComponent = 'mainClassesComponent';
          this.currentComponentFooterText = 'O nama';
          this.landingPageVisible = false;
          this.mainClassesVisible = true;
          console.log(
            this.currentComponent,
            this.landingPageVisible,
            this.mainClassesVisible
          );
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
