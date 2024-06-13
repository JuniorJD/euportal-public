import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent {
  data: any;
  currentDate = new Date();

  constructor(private http: HttpClient) { }

  fetchData() {
    this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .subscribe(response => {
        this.data = response;
      });
  }
}
