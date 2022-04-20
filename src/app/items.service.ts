import { Item } from './Item';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  items!: Item[];
  constructor(private http:HttpClient) {}

  itemToBeUpdated = new Item();
  itemToBeUpdatedIndex: any = 0;


  getItems() {
    return this.http.get(environment.apiBaseUrl+ '/products');
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
    return this.http.post(environment.apiBaseUrl+'/addproduct', givenItem)
  }
}
