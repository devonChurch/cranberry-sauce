import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-lotto-ball",
  templateUrl: "./lotto-ball.component.html",
  styleUrls: ["./lotto-ball.component.scss"]
})
export class LottoBallComponent implements OnInit {
  @Input() value: number;
  @Input() isActive: number;
  @Input() handleClick: (value: number) => void;

  constructor() {}

  ngOnInit() {}
}
