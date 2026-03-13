import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  message: string = '';

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.message = params['type'];
    });

  }

}
