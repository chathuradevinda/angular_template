import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Customer } from '../../models/interfaces/customer.model';
import { AddCutomer, RemoveCutomer } from '../actions/customers.action';

export class CustomerStateModel {
  customers: Customer[];
}

@State<CustomerStateModel>({
  name: 'customers',
  defaults: {
    customers: []
  }
})

export class CustomerState {
  @Selector()
  static getCustomers(state: CustomerStateModel) {
    return state.customers;
  }

  @Action(AddCutomer)
  add({getState, patchState}: StateContext<CustomerStateModel>, {payload}: AddCutomer) {
    const state = getState();
    patchState({
      customers: [...state.customers, payload]
    });
  }

  @Action(RemoveCutomer)
  remove({getState, patchState}: StateContext<CustomerStateModel>, {payload}: RemoveCutomer) {
    patchState({
      customers: getState().customers.filter(c => c.name !== payload)
    });
  }
}


