import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/atoms/button/button.component';
import { CardComponent } from '../../components/atoms/card/card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ButtonComponent, CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {}
