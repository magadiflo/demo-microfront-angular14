import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  constructor() { }

  ngOnInit(): void {
  }

  clickCard(): void {

  }

}
