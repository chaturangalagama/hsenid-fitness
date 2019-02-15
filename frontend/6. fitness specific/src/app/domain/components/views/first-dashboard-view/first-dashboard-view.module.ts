import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PatientDetailLayoutComponent } from '../../../../core/components/containers/patient-detail-layout';
import { SharedModule } from '../../../../shared.module';
import { FirstDashboardViewComponent } from './first-dashboard-view/first-dashboard-view.component';
import { FirstDashboardViewRoutingModule } from './first-dashboard-view-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FirstDashboardViewRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    SharedModule,
  ],
  declarations: [
    PatientDetailLayoutComponent,
    FirstDashboardViewComponent,
  ],

  providers: [
  ]
})
export class FirstDashboardViewModule { }
