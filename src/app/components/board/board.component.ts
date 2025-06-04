import { Component } from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {LayoutService} from "../../services/layout.service";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    MatIconButton,
    MatButton
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {
  constructor(
    public layoutService: LayoutService,
  ) {
  }
}
