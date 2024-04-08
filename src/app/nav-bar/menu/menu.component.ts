import { Component } from '@angular/core';
import { ContentToggleService } from '../../shared/content-switch.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  constructor(private toggleService: ContentToggleService) {}

  switchToComponent(componentName: string) {
    this.toggleService.toggleContent(componentName);
  }

  contactModalVisible: boolean = false;
  showContactInfoOnClick(): void {
    this.contactModalVisible = true;
    // console.log(this.contactModalVisible);
  }

  closeContactInfo(event: any): void {
    console.log(event);
    this.contactModalVisible = false;
    event.stopPropagation();
    console.log(this.contactModalVisible);
  }
}
