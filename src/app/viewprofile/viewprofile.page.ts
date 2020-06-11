import { Component, OnInit } from '@angular/core';
import { CallwaitPage } from '../callwait/callwait.page';
import { AddContact2Page } from '../add-contact2/add-contact2.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.page.html',
  styleUrls: ['./viewprofile.page.scss'],
})
export class ViewprofilePage implements OnInit {
selectedItem:any = 'item1';
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: CallwaitPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
   async presentModal2() {
    const modal = await this.modalController.create({
      component: AddContact2Page,
      cssClass: 'Add-Contact'
    });
    return await modal.present();
  }
}
