import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink,RouterOutlet, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
  
})
export class NavComponent {

}
