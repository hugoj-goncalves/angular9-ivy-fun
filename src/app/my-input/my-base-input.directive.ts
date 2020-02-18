import { Directive, Input } from "@angular/core";
import { ControlContainer, FormGroupDirective } from "@angular/forms";

@Directive()
export abstract class MyBaseInput {
  get formGroup() {
    if (
      this.controlContainer &&
      this.controlContainer instanceof FormGroupDirective &&
      this.controlContainer.form
    ) {
      return this.controlContainer.form;
    }
    return undefined;
  }

  private _controlName: string;
  get controlName() {
    return this._controlName;
  }
  @Input()
  set controlName(value) {
    console.log(value, this.formGroup);
    if (!this.formGroup) {
      throw new Error('formgroup is not defined yet!');
    }
    this._controlName = value;
  }

  constructor(public controlContainer: ControlContainer) {}
}
