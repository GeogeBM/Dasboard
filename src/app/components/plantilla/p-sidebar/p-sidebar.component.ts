import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-p-sidebar',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './p-sidebar.component.html',
  styleUrl: './p-sidebar.component.css'
})
export class PSidebarComponent {

}
