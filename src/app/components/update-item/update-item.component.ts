import { Router } from '@angular/router';
import { ItemsService } from './../../items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css'],
})
export class UpdateItemComponent implements OnInit {
  constructor(private itemService: ItemsService, private router: Router) {}

  givenItem = this.itemService.getItemToBeUpdated();

  ngOnInit(): void {}

  updateItem(): void {
    this.itemService.updateItem(this.givenItem);
  }
}
