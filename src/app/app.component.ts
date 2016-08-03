import { Component, ViewEncapsulation } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import {NewsletterComponent} from "./newsletter/newsletter.component";
import {FormGroup, FormControl, FormBuilder, Validators, FormArray} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    NewsletterComponent
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

}
