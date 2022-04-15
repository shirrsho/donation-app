import { Router } from '@angular/router';
import { ItemsService } from './../../items.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Item';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(private ItemsService: ItemsService, private router: Router) {}

  items = this.ItemsService.getItems();

  ngOnInit(): void {}

  deleteItem(item: Item): void {
    this.items = this.ItemsService.deleteItem(item);
  }

  updateItem(item: Item, i: any): void {
    this.ItemsService.setItemToBeUpdated(item, i);
    this.router.navigate(['update-item']);
  }
}
