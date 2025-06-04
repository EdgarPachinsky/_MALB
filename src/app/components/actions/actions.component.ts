import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {LayoutService} from "../../services/layout.service";
import {MAT_GRID_LIST_MAX_COLS} from "../../constants/tile.constant";

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss'
})
export class ActionsComponent {
  constructor(
    public layoutService: LayoutService,
  ) {
  }

  protected readonly MAT_GRID_LIST_MAX_COLS = MAT_GRID_LIST_MAX_COLS;
}
