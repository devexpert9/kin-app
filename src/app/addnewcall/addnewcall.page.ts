import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-addnewcall',
  templateUrl: './addnewcall.page.html',
  styleUrls: ['./addnewcall.page.scss'],
})
export class AddnewcallPage implements OnInit {

  customAlertOptions: any = {
    header: 'Contacts',
  
    translucent: true
  };
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
