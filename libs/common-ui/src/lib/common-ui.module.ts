import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, HeaderComponent, CardComponent],
  exports: [HeaderComponent, CardComponent],
})
export class CommonUiModule {}
