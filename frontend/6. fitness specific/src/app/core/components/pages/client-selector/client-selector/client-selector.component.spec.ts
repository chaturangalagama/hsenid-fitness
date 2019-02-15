import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSelectorComponent } from './client-selector.component';
import { TestingModule } from '../../../../test/testing.module';
import { StoreService } from '../../../services/store.services';

describe('ClientSelectorComponent', () => {
  let component: ClientSelectorComponent;
  let fixture: ComponentFixture<ClientSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
