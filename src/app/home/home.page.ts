import { Component, inject } from '@angular/core';
import { AlertController, RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private alertController: AlertController) {}

  shoppingList = ['Milch', 'Eier', 'Zimt'];

  async addItem() {
    const alert = await this.alertController.create({
      header: 'Artikel eingeben',
      buttons: ['Hinufügen'],
    });

    await alert.present();

    // let alertButtons = ['OK'];
    // let alertInputs = [
    //   {
    //     placeholder: 'Name',
    //   },
    //   {
    //     placeholder: 'Nickname (max 8 characters)',
    //     attributes: {
    //       maxlength: 8,
    //     },
    //   },
    //   {
    //     type: 'number',
    //     placeholder: 'Age',
    //     min: 1,
    //     max: 100,
    //   },
    //   {
    //     type: 'textarea',
    //     placeholder: 'A little about yourself',
    //   },
    // ];
  }
}
