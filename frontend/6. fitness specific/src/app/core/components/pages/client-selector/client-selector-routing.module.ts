import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientSelectorComponent } from './client-selector/client-selector.component';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Clinic'
    },

    children: [
      { path: '', pathMatch: 'full', redirectTo: 'select' },
      {
        path: 'select',
        component: ClientSelectorComponent,
        data: {
          requiresLogin: true
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSelectorRoutingModule {}
