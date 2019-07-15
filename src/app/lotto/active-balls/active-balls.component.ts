import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-active-balls",
  templateUrl: "./active-balls.component.html",
  styleUrls: ["./active-balls.component.scss"]
})
export class ActiveBallsComponent implements OnInit {
  @Input() checkIsBallActive: (ball: number) => boolean;
  @Input() toggleIsBallActive: (ball: number) => void;

  constructor() {}

  ngOnInit() {}

  createBallList = (
    from: number,
    to: number
  ): { value: number; isActive: boolean }[] => {
    return new Array(0 + (to - from + 1)).fill(0).map((_, index) => {
      const value = from + index;
      return {
        value,
        isActive: this.checkIsBallActive(value)
      };
    });
  };
}
