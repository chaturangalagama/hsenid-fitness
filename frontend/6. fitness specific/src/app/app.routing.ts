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
        loadChildren: './core/components/pages/profile/profile.module#ProfileModule'
      },
      {
        path: 'first-dashboard-view',
        loadChildren: './domain/components/views/first-dashboard-view/first-dashboard-view.module#FirstDashboardViewModule'
      },
      {
        path: 'clinic',
        loadChildren: './core/components/pages/client-selector/client-selector.module#ClientSelectorModule'
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
        loadChildren: './core/components/pages/pages.module#PagesModule'
      }
    ]
  },
  { path: '**', redirectTo: '/pages/first-dashboard-view/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', useHash: true, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
