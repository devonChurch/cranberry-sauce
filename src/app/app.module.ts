import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";

import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { LottoComponent } from "@lotto/lotto.component";
import { ActiveBallsComponent } from "@lotto/active-balls/active-balls.component";
import { SectionComponent } from "@components/containers/section/section.component";
import { LottoBallComponent } from "@components/balls/lotto-ball/lotto-ball.component";

console.log(`v${APP_VERSION}`);
console.log(FIREBASE_API_KEY);

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
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
