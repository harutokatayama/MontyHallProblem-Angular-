import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './view/main-menu/main-menu.component';
import { MainMonitorComponent } from './view/main-monitor/main-monitor.component';


const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'main-monitor', component: MainMonitorComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
