import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'centurion-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'centurion';

  constructor(private readonly router: Router) { }

  navigateToTodos() {
    this.router.navigate(['/todos']);
  }
}
