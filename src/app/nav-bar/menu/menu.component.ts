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
}
