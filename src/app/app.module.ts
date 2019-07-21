import "./core/firebase";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LottoComponent } from "./lotto/lotto.component";
import { ActiveBallsComponent } from "./lotto/active-balls/active-balls.component";
// Components.
import { SectionComponent } from "./components/containers/section/section.component";
import { LottoBallComponent } from "./components/balls/lotto-ball/lotto-ball.component";

@NgModule({
  declarations: [
    // Root.
    AppComponent,
    // Sections.
    LottoComponent,
    ActiveBallsComponent,
    // Components.
    SectionComponent,
    LottoBallComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
