import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';

const routes: Routes = [
  { path: 'home/:type', component: HomeComponent },
  { path: 'frontend/:type', component: FrontendComponent },
  { path: 'backend/:type', component: BackendComponent },
  { path: '', redirectTo: 'home/home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
