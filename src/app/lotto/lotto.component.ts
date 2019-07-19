import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lotto",
  templateUrl: "./lotto.component.html",
  styleUrls: ["./lotto.component.scss"]
})
export class LottoComponent implements OnInit {
  activeBalls: { [key: string]: boolean } = {};

  constructor() {}

  ngOnInit() {}

  checkIsBallActive = (ball: number): boolean => {
    // console.log("checkIsBallActive", ball);
    return Boolean(this.activeBalls[ball]);
  };

  toggleIsBallActive = (ball: number): void => {
    console.log("toggleIsBallActive", ball);

    this.activeBalls[ball] = !this.activeBalls[ball];
  };
}
