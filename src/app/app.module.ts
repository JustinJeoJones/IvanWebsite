import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { IssuesComponent } from './issues/issues.component';
import { AboutComponent } from './about/about.component';
import { EndorsementsComponent } from './endorsements/endorsements.component';
import { FooterComponent } from './footer/footer.component';
import { DropDownComponent } from './drop-down/drop-down.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    IssuesComponent,
    AboutComponent,
    EndorsementsComponent,
    FooterComponent,
    DropDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
