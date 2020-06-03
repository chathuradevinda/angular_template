import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';

@NgModule({
  declarations: [
    CreateCustomerComponent,
    ListCustomersComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule
  ],
  exports: [
    CreateCustomerComponent,
    ListCustomersComponent
  ],
  providers: [],
})
export class CustomersModule {}
