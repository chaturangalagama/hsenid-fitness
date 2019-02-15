import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { FullLayoutComponent, SimpleLayoutComponent } from './core/components/containers';
import { AuthGuardService as AuthGuard } from './core/services/util-services/auth-guard.service';
import { PermissionsGuardService as PermissionsGuard } from './core/services/util-services/permissions-guard.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'pages',
    component: FullLayoutComponent,
    // canActivate: [AuthGuard, PermissionsGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'profile',
        loadChildren: './core/components/basic-views/profile/profile.module#ProfileModule'
      },
      {
        path: 'patient',
        loadChildren: './bussiness/components/views/patient/patient.module#PatientModule'
      },
      {
        path: 'clinic',
        loadChildren: './bussiness/components/views/clinic/clinic.module#ClinicModule'
      },
    ]
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './core/components/basic-views/pages.module#PagesModule'
      }
    ]
  },
  { path: '**', redirectTo: '/pages/patient/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', useHash: true, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
