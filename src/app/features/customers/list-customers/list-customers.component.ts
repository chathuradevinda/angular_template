import { Component, OnInit } from '@angular/core';
import { State, Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Customer } from '../../../shared/models/interfaces/customer.model';
import { RemoveCutomer } from '../../../shared/store/actions/customers.action';
import { CustomerState } from '../../../shared/store/state/customers.state';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styles: [
  ]
})
export class ListCustomersComponent implements OnInit {

  @Select(CustomerState.getCustomers) customers$: Observable<Customer[]>;

  constructor(private store: Store) {
  }

  removeCustomer(name) {
     this.store.dispatch(new RemoveCutomer(name));
  }

  ngOnInit(): void {
  }

}
