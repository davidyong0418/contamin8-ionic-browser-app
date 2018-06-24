import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	url = 'https://contamin8.com/?app=android&v=0.1';
	embeded_url : any;
  constructor(public navCtrl: NavController, public plt: Platform, public sanitizer: DomSanitizer) {
  	if (this.plt.is('ios')) {
  		this.url = 'https://contamin8.com/?app=ios&v=0.1'
  	}
  	else {
  		this.url = 'https://contamin8.com/?app=android&v=0.1';
  	}
  	this.embeded_url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
