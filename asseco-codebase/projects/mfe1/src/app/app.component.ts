import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavigationComponent } from './components/layout/navigation/navigation.component';

@Component({
  selector: 'app-mfe1-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    FooterComponent,
    FooterComponent,
    NavigationComponent,
    NavigationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'MFE1';
}
