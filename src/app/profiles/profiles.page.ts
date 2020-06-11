import { Component, OnInit } from '@angular/core';
import { AddnewcallPage } from '../addnewcall/addnewcall.page';
import { AddmembersPage } from '../addmembers/addmembers.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {
selectedItem:any = 'item1';
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: AddnewcallPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
    async presentModal2() {
    const modal = await this.modalController.create({
      component: AddmembersPage,
      cssClass: 'add-members'
    });
    return await modal.present();
  }
}
