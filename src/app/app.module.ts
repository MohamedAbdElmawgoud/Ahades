import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { GetDataService } from 'src/app/admin/get-data.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { HttpClientModule } from '@angular/common/http';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],  
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule
  ,    IonicStorageModule.forRoot(),
  HttpClientModule,
  ],
  providers: [
    StatusBar,
    GetDataService,
    LocalNotifications,
    AdMobFree,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BackgroundMode,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
