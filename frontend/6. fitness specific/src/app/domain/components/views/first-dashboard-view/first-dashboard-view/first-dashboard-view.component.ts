import { FormBuilder } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxPermissionsService } from 'ngx-permissions';
import { AlertService } from '../../../../../core/services/util-services/alert.service';
import { LoggerService } from '../../../../../core/services/util-services/logger.service';
import { BussinessStoreService } from '../../../../../core/services/api-services/store-bussiness.service';
import { AuthService } from '../../../../../core/services/api-services/auth.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './first-dashboard-view.component.html',
  styleUrls: ['./first-dashboard-view.component.scss']
})
export class FirstDashboardViewComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableWrapper') tableWrapper;
  @ViewChild('containerFluid') container;
  private currentComponentWidth;

  constructor(
    private permissionsService: NgxPermissionsService,
    private router: Router,
    private store: BussinessStoreService,
    private alertService: AlertService,
    private eRef: ElementRef,
    private logger: LoggerService,
    private modalService: BsModalService,
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // if (localStorage.getItem('access_token') && localStorage.getItem('clinicCode') && localStorage.getItem('clinicId')) {
    //   this.store.clinicCode = localStorage.getItem('clinicCode');
    //   this.store.clinicId = localStorage.getItem('clinicId');
    // } else {
    //   alert('Clinic is not selected.');
    //   localStorage.removeItem('access_token');
    //   this.authService.logout();
    // }
    // if (this.store.errorMessages.length > 0) 
    //   this.store.errorMessages.forEach(errorMsg1 => {console.log('ERROR MESSAGE: ', errorMsg1);});
    // this.getPatientRegistryList();
    // this.store.getHeaderRegistry().subscribe(res => {
    //   if (this.permissionsService.getPermission('ROLE_DOCTOR') && !this.permissionsService.getPermission('ROLE_CA')) {
    //     this.populateDocData(null);
    //   } else 
    //     this.populateData(null);
    // });
  }

  ngAfterViewChecked() {
    const bodyClassList = document.querySelector('body').classList;

    if (
      bodyClassList.contains('sidebar-hidden') ||
      bodyClassList.contains('asidemenu-hidden') ||
      bodyClassList.contains('sidebar-minimized') ||
      bodyClassList.contains('brand-minimized')
    ) {
      // this.currentComponentWidth = this.container.nativeElement.clientWidth;
      const evt = window.document.createEvent('UIEvents');
      evt.initUIEvent('click', true, false, window, 0);
      window.dispatchEvent(evt);
    } else {
      const evt = window.document.createEvent('UIEvents');
      evt.initUIEvent('click', true, false, window, 0);
      window.dispatchEvent(evt);

      this.table.recalculate();
    }
  }

}
