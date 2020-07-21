import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../services/logging.service'
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;


  constructor(
    private logService: LoggingService,
    private accountService: AccountService) {}

  onSetTo(status: string) {
    // this.logService.logStatusChange(status);
    this.accountService.updateStatus(this.id, status);
    this.accountService.statusUpdated.emit(status);
  }
}
