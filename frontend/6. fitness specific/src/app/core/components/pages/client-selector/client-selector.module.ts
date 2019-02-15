import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared.module';
import { ClientSelectorRoutingModule } from './client-selector-routing.module';
import { ClientSelectorComponent } from './client-selector/client-selector.component';

@NgModule({
  imports: [CommonModule, ClientSelectorRoutingModule, SharedModule],
  declarations: []
})
export class ClientSelectorModule {}
