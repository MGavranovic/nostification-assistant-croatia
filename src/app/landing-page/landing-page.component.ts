import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  landingPageStyleHide: string = '';
  landingPageStyleShow: string = '';

  onClickHideLanding(event: any): boolean {
    console.log(event);
    if (event.type === 'click') {
      this.landingPageStyleHide =
        'display: none, height: 82vh, justify-content: center';
      return true;
      // console.log('display: none, height: 82vh, justify-content: center');
      // return 'display: none, height: 82vh, justify-content: center';
    } else {
      this.landingPageStyleShow =
        'display: flex, height: 82vh, justify-content: center';
      return false;
      // console.log('display: flex, height: 82vh, justify-content: center');
      // return 'display: flex, height: 82vh, justify-content: center';
    }
  }
}
