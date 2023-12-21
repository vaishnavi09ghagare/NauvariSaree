import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  searchTerm: string = ''; // To store the search term

  constructor() {}

  search(): void {
    // Perform search functionality here using 'this.searchTerm'
    console.log('Searching for:', this.searchTerm);
    // Implement your search logic, e.g., calling a service or handling the search within this method.
  }

}
