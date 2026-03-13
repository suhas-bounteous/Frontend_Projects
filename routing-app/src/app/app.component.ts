import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /* Service messages */
  message1: string = '';
  message2: string = '';

  /* Custom pipe */
  name = "Suraj";

  /* Pipes example */
  currentDate = new Date();
  currency = 1299.99;
  sampleText = 'this is sample text for pipes';

  /* Reactive form */
  reactiveForm!: FormGroup;

  constructor(private service: MyserviceService,
              private fb: FormBuilder) {

    /* Service methods */
    this.message1 = this.service.getMessage1();
    this.message2 = this.service.getMessage2();

    /* Reactive form creation */
    this.reactiveForm = this.fb.group({

      username: ['', [Validators.required, Validators.minLength(3)]],

      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required, Validators.minLength(6)]]

    });

  }

  /* Template form submit */
  submitTemplateForm(form: any) {

    console.log("Template Form Data:", form.value);

  }

  /* Reactive form submit */
  submitReactiveForm() {

    console.log("Reactive Form Data:", this.reactiveForm.value);

  }

}
