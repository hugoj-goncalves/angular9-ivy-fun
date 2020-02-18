import { Component, OnInit, forwardRef, Host, SkipSelf, Input } from "@angular/core";
import { ControlContainer, FormGroupDirective } from "@angular/forms";
import { MyBaseInput } from "./my-base-input.directive";

export function factory(component: MyBaseInput) {
  return component.controlContainer;
}
const parentControlContainer = {
  provide: ControlContainer,
  useFactory: factory,
  deps: [forwardRef(() => MyInputComponent)]
};

@Component({
  selector: "app-my-input",
  templateUrl: "./my-input.component.html",
  styleUrls: ["./my-input.component.scss"],
  viewProviders: [parentControlContainer],
  providers: [parentControlContainer]
})
export class MyInputComponent extends MyBaseInput implements OnInit {

  constructor(
    @Host()
    @SkipSelf()
    public controlContainer: ControlContainer
  ) {
    super(controlContainer);
  }

  ngOnInit(): void {
    console.log(this.formGroup);
  }
}
