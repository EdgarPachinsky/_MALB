import {Component, HostListener, Type} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BoardComponent} from "./components/board/board.component";
import {TileModel} from "./models/tile.model";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {CdkPortalOutlet, ComponentPortal} from "@angular/cdk/portal";
import {ActionsComponent} from "./components/actions/actions.component";
import {LayoutService} from "./services/layout.service";
import {MAT_GRID_LIST_MAX_COLS} from "./constants/tile.constant";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoardComponent, MatGridList, MatGridTile, CdkPortalOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly MAT_GRID_LIST_MAX_COLS = MAT_GRID_LIST_MAX_COLS;
  public rowHeightForMatGridList = `${window.innerHeight}px`

  constructor(
    public layoutService: LayoutService,
  ) {
  }

  @HostListener('window:resize')
  onResize() {
    this.rowHeightForMatGridList = `${window.innerHeight}px`;
  }

  createComponentPortal(component: Type<any>){
    return new ComponentPortal(component);
  }

}
