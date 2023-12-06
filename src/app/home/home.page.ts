import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  shoppingList = ['Milch', 'Eier', 'Zimt'];

  public alertButtons = [
    {
      text: 'Hinzufügen',
      handler: (data: { value: string }) => {
        this.shoppingList.push(data.value);
      },
    },
  ];
  public alertInputs = [
    {
      name: 'value',
      placeholder: 'Artikel (max 30 Zeichen)',
      attributes: {
        maxlength: 30,
      },
    },
  ];

  save() {
    let itemsText = JSON.stringify(this.shoppingList);
    localStorage.setItem('items', itemsText);
  }
}
