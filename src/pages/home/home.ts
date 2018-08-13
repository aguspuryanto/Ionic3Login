import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = '';
  email = '';

  constructor(public navCtrl: NavController, private auth: AuthServiceProvider) {
    let info = this.auth.getUserInfo();
    console.log( info );
    this.username = info['name'];
    this.email = info['email'];
  }
 
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot('LoginPage')
    });
  }

}
