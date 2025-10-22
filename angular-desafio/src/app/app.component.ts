import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RodapeComponent } from './layout/rodape/rodape.component';
import { HeaderComponent } from "./layout/header/header.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RodapeComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-desafio';
}
