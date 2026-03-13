import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-receiver-b',
  templateUrl: './receiver-b.component.html'
})
export class ReceiverBComponent implements OnInit {

  message = "";

  constructor(private messageService: MessageService) {}

  ngOnInit() {

    this.messageService.message$.subscribe(data => {
      console.log("Receiver B:", data);
      this.message = data;
    });

  }

}
