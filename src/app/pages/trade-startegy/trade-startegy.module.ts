import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TradeStartegyComponent } from './trade-startegy.component';


const routes: Routes = [
  {
    path: '',
     component: TradeStartegyComponent,
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
    TradeStartegyComponent
  ]
})
export class TradeStartegyModule { }
