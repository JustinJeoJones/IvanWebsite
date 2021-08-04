import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EndorsementsComponent } from './endorsements/endorsements.component';
import { IssuesComponent } from './issues/issues.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'issues', component: IssuesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'endorsements', component: EndorsementsComponent },
  { path: '*', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
