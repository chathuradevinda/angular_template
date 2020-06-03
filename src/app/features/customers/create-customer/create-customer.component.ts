import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { AddCutomer } from '../../../shared/store/actions/customers.action';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html'
})
export class CreateCustomerComponent implements OnInit {

  constructor(private store: Store) { }

  addCustomer(name, location) {
    this.store.dispatch(new AddCutomer({name, location}));
  }

  ngOnInit(): void {
  }

}
