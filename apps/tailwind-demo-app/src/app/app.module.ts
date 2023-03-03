import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonUiModule } from '@tb-tailwind/common-ui';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'main' },
      {
        path: 'main',
        loadChildren: () =>
          import('@tb-tailwind/common-feature').then(
            (mod) => mod.CommonFeatureModule
          ),
      },
    ]),
    CommonUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
