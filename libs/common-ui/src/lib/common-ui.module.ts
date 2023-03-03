import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, HeaderComponent],
  exports: [HeaderComponent],
})
export class CommonUiModule {}
