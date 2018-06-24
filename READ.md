Container Ionic App

==========================

Requirements<br/>
PHP 5.4+<br/>
--Splash screen Animation<br/>
package: splash-screen<br/>


--create iframe using browser ionic package.<br/>
package: in-app-browser package<br/>

this.url = 'https://contamin8.com/?app=ios&v=0.1';
        let browser = this.iab.create(this.url, '_target', 'location=no,toolbar=no,allowInlineMediaPlayback=yes');<br/>

--Onesignal Notification<br/>
package: Onesignal package<br/>