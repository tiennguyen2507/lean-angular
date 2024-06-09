import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input({ required: true })
  columns: string[] = [];

  @Input({ required: true })
  dataSource: any[] = [];
}
