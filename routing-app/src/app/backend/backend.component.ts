import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent {

  message: string = '';

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(params => {

      this.message = params['type'];

    });

  }

}
