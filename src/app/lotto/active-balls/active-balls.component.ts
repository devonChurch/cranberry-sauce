import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { createNumberRange } from "@core/misc/";

@Component({
  selector: "app-active-balls",
  templateUrl: "./active-balls.component.html",
  styleUrls: ["./active-balls.component.scss"]
})
export class ActiveBallsComponent implements OnInit {
  @Input() checkIsBallActive: (ball: number) => boolean;
  @Input() handleBallToggle: (ball: number) => void;

  constructor() {}

  ngOnInit() {}

  createBallList = (
    from: number,
    to: number
  ): { value: number; isActive: boolean }[] =>
    createNumberRange(from, to).map(value => ({
      value,
      isActive: this.checkIsBallActive(value)
    }));
}
