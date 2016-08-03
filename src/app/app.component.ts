import { Component, ViewEncapsulation } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import {NewsletterComponent} from "./newsletter/newsletter.component";
import {FormGroup, FormControl, FormBuilder, Validators, FormArray, REACTIVE_FORM_DIRECTIVES} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    NewsletterComponent,
    REACTIVE_FORM_DIRECTIVES
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  form: FormGroup;
  addresses: FormArray;

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      first: 'Nancy',
      last: '',
      username: '',
      addresses: this.buildArray(),
      newsletter: '',
      robot: ''
    });
  }

  buildArray(): FormArray {
    this.addresses = this._fb.array([
      this.buildGroup()
    ]);
    return this.addresses;
  }

  buildGroup(): FormGroup {
    return this._fb.group({
      street: '',
      city: '',
      state: 'NY',
      zip: '',
    });
  }

  add() {
    this.addresses.push(this.buildGroup());
  }
}
