import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationPageRoutingModule } from './notification-routing.module';

import { NotificationPage } from './notification.page';
import {TimeAgoPipe} from 'time-ago-pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationPageRoutingModule
  ],
  declarations: [NotificationPage, TimeAgoPipe]
})
export class NotificationPageModule {}
