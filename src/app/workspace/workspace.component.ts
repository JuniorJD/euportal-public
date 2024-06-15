import { Component } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
  ],
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent {
  items: any[] = [];
  timestamp: string = '';

  constructor(private http: HttpClient) {}

  fetchItems() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts?_limit=5').subscribe(data => {
      this.items = data;
      this.timestamp = formatDate(new Date(), 'MMMM d, y, h:mm:ss a', 'en-US');
    });
  }
}
