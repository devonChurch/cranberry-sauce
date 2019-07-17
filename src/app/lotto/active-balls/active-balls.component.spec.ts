import { Component, OnInit, Input } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ActiveBallsComponent } from "./active-balls.component";
import { SectionComponent } from "../../components/containers/section/section.component";
import { LottoBallComponent } from "../../components/balls/lotto-ball/lotto-ball.component";

@Component({
  selector: "host-component",
  template: `
    <app-active-balls
      [checkIsBallActive]="checkIsBallActive"
      [toggleIsBallActive]="toggleIsBallActive"
    ></app-active-balls>
  `
})
class TestHostComponent {
  checkIsBallActive = (ball: number) => false;
  toggleIsBallActive = () => {};
}

describe("ActiveBallsComponent", () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        ActiveBallsComponent,
        SectionComponent,
        LottoBallComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    // Assert.
    expect(component).toBeTruthy();
  });

  it("should set ball 33 to active", () => {
    // Arrange.
    component.checkIsBallActive = ball => ball === 33;
    component.toggleIsBallActive = () => {};
    fixture.detectChanges();

    // Act.
    const ball33 = fixture.nativeElement.querySelector(
      '[data-test-id="lotto-ball-33"].ball--active'
    );

    // Assert.
    expect(ball33).toBeTruthy();
  });
});
