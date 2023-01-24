import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsLibService } from '@commons-lib';

import { IProductCard } from '../models/product-card.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductCardComponent implements OnInit {

  @Input() product?: IProductCard;

  constructor(private _commonsLibService: CommonsLibService) { }

  ngOnInit(): void {
  }

  clickCard(): void {
    this._commonsLibService.sendData({
      name: this.product!.name,
      price: this.product!.price
    });
  }

}
