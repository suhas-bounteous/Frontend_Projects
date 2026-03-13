import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})
export class FrontendComponent {

  message: string = '';

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(params => {

      this.message = params['type'];

    });

  }

}
