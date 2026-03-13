import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-receiver-a',
  templateUrl: './receiver-a.component.html'
})
export class ReceiverAComponent implements OnInit {

  message = "";

  constructor(private messageService: MessageService) {}

  ngOnInit() {

    this.messageService.message$.subscribe(data => {
      console.log("Receiver A:", data);
      this.message = data;
    });

  }

}
