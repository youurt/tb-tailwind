import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MainComponent },
      {
        path: 'angular',
        component: AngularComponent,
      },
    ]),
  ],
})
export class CommonFeatureModule {}
