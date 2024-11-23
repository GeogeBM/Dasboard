import { Component } from '@angular/core';
import { PSidebarComponent } from "../p-sidebar/p-sidebar.component";
import { AppComponent } from "../../../app.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-p-body',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PSidebarComponent, AppComponent,HeaderComponent],
  templateUrl: './p-body.component.html',
  styleUrl: './p-body.component.css'
})
export class PBodyComponent {

}
