import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/atoms/button/button.component';
import { CardComponent } from '../../components/atoms/card/card.component';
import HttpRequests from '../../../config/httpRequests';
import { CommonModule } from '@angular/common';
import { product } from '../../../types/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ButtonComponent, CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  constructor(private httpRequests: HttpRequests) {}

  isLoading: boolean = true;

  products: Array<product> = [];

  ngOnInit() {
    this.httpRequests.get<Array<product>>('/products').subscribe((result) => {
      this.isLoading = false;
      this.products = result;
    });
  }
}
