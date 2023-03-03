import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { MainComponent } from './main/main.component';
import { NxComponent } from './nx/nx.component';
import { TailwindComponent } from './tailwind/tailwind.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MainComponent },
      {
        path: 'angular',
        component: AngularComponent,
      },
      {
        path: 'tailwind',
        component: TailwindComponent,
      },
      {
        path: 'nx',
        component: NxComponent,
      },
    ]),
  ],
})
export class CommonFeatureModule {}
