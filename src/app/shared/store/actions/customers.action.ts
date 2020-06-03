import { Customer } from '../../models/interfaces/customer.model';

export class AddCutomer {
  static readonly type = '[Customer] Add';

  constructor(public payload: Customer) {}
}

export class RemoveCutomer {
  static readonly type = '[Customer] Remove';

  constructor(public payload: string) {}
}
