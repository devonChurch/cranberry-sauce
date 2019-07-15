import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionComponent } from './components/containers/section/section.component';
import { LottoComponent } from './lotto/lotto.component';
import { ActiveBallsComponent } from './lotto/active-balls/active-balls.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    LottoComponent,
    ActiveBallsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
