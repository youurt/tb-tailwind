import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '@tb-tailwind/common-ui';

@Component({
  selector: 'tb-tailwind-main',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {}
