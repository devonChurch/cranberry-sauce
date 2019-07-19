import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-lotto-ball",
  templateUrl: "./lotto-ball.component.html",
  styleUrls: ["./lotto-ball.component.scss"]
})
export class LottoBallComponent implements OnInit {
  @Input() value: number;
  @Input() isActive: number;
  @Output() toggle: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
