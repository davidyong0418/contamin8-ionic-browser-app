import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { OneSignal } from '@ionic-native/onesignal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  url: any;
  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    public iab: InAppBrowser,
    private oneSignal: OneSignal) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // statusBar.styleDefault();
      statusBar.hide();
      // statusBar.overlaysWebView(true);
      // statusBar.backgroundColorByHexString('#ffffff');
      splashScreen.hide();

      this.oneSignal.startInit('ea393ae2-3285-4f4d-b535-834e3d3f8e70', '840272064722');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
       // do something when notification is received
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
      });

      this.oneSignal.endInit();

      if (platform.is('ios')) {
        this.url = 'https://contamin8.com/?app=ios&v=0.1';
        let browser = this.iab.create(this.url, '_target', 'location=no,toolbar=no,allowInlineMediaPlayback=yes');
      }
      else {
        this.url = 'https://contamin8.com/?app=android&v=0.1';
      }
    });
  }
}

