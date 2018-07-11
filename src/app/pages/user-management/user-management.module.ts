import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { UserManagementComponent } from './user-management.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
     component: UserManagementComponent,
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
    UserManagementComponent
  ]
})
export class UserManagementModule { }
