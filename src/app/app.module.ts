import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//view
import { MainMenuComponent } from './view/main-menu/main-menu.component';
import { MainMonitorComponent } from './view/main-monitor/main-monitor.component';
import { SettingComponent } from './view/setting/setting.component';
import { ResultComponent } from './view/result/result.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular material
import { MatButtonModule, MatIconModule, MatSelectModule, MatInputModule, MatSlideToggleModule, MatProgressSpinnerModule, MatProgressBarModule, MatListModule, MatDividerModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MainMonitorComponent,
    SettingComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    RouterModule,
    FormsModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
