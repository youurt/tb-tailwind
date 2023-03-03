import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MainComponent }]),
  ],
})
export class CommonFeatureModule {}
