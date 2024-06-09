import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from '../../components/atoms/table/table.component';

export interface Todo {
  name: string;
  status: string;
  note: string;
}

const todoList: Todo[] = [
  { name: 'Ăn Cơm', status: 'NSY', note: 'hello' },
  { name: 'Ăn Cơm', status: 'NSY', note: 'hello' },
  { name: 'Ăn Cơm', status: 'NSY', note: 'hello' },
];

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, MatTableModule, TableComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  columns: string[] = ['name', 'status', 'note'];
  dataSource = todoList;
}
