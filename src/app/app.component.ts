import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'teste-angular9';

  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      test: new FormControl(),
    });
  }
}
