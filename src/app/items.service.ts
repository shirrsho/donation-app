import { Item } from './Item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  items: Item[] = [
    { id: 1, name: 'Teach Yourself C', picsrc: '', owner: 0, requests: [] },
    { id: 2, name: 'Software Engineering', picsrc: '', owner: 0, requests: [] },
  ];
  constructor() {}

  itemToBeUpdated = new Item();
  itemToBeUpdatedIndex: any = 0;
  getItems(): Item[] {
    return this.items;
  }

  deleteItem(givenItem: Item): Item[] {
    this.items = this.items.filter((item) => givenItem.id != item.id);
    return this.items;
  }

  setItemToBeUpdated(givenitem: Item, i: number) {
    this.itemToBeUpdated = givenitem;
    this.itemToBeUpdatedIndex = i;
  }

  getItemToBeUpdated(): Item {
    return this.itemToBeUpdated;
  }

  updateItem(givenItem: Item) {
    this.items.splice(this.itemToBeUpdatedIndex, 1, givenItem);
  }

  addItem(givenItem: Item) {
    this.items.push(givenItem);
  }
}
