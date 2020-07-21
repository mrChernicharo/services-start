import { Component } from '@angular/core';
import { LoggingService } from '../services/logging.service'
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {


  constructor(
    private logService: LoggingService,
    private accountService: AccountService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.logService.logStatusChange(accountStatus)
    this.accountService.addAccount(accountName, accountStatus)
  }
}
