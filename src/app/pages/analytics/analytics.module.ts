import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnalyticsComponent } from './analytics.component';


const routes: Routes = [
  {
    path: '',
     component: AnalyticsComponent,
    data: {
      title: ''
    },
  }
];
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ApiService
  ],
  declarations: [
    AnalyticsComponent
  ]
})
export class AnalyticsModule { }
