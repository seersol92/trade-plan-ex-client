import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { MatchHeightModule } from './../../shared/directives/match-height.directive';
const routes: Routes = [
  {
    path: '',
     component: DashboardComponent,
    data: {
      title: ''
    },
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatchHeightModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
