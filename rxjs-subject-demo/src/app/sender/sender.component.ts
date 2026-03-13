import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html'
})
export class SenderComponent {

  constructor(private messageService: MessageService) {}

  sendHello() {
    this.messageService.sendMessage("Hello Angular");
  }

  sendWelcome() {
    this.messageService.sendMessage("Welcome to RxJS");
  }

}
