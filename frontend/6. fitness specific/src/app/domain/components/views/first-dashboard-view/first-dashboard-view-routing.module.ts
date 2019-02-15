import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { FirstDashboardViewComponent } from './first-dashboard-view/first-dashboard-view.component';
import { PatientDetailLayoutComponent } from '../../../../core/components/containers/patient-detail-layout';

// export const redirectTo = () => {
//   alert('Please check you have corresponding permission or not.');
//   return 'login';
// };

export const routes: Routes = [
  {
    path: '',
    // canActivateChild: [NgxPermissionsGuard],
    data: {
      title: 'Patient'
    },
    component: PatientDetailLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'list' },
      {
        path: 'list',
        component: FirstDashboardViewComponent,
        data: {
          requiresLogin: true,
          permissions: {
            only: ['ROLE_PATIENT_ACCESS'],
            // redirectTo
          }
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstDashboardViewRoutingModule { }
