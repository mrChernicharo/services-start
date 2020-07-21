import { Injectable, EventEmitter } from '@angular/core';

import { LoggingService } from './logging.service';

@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statusUpdated = new EventEmitter<string>();

  constructor(private logService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({name, status});
    this.logService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.logService.logStatusChange(status);

  }

}
