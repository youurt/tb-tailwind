import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { CardComponent } from '@tb-tailwind/common-ui';

@Component({
  selector: 'tb-tailwind-main',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @HostBinding('class.c-tailwind-main') hostClass = true;
}
