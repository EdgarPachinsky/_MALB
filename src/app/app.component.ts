import {Component, Type} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BoardComponent} from "./components/board/board.component";
import {Tile} from "./models/tile";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {CdkPortalOutlet, ComponentPortal} from "@angular/cdk/portal";
import {ActionsComponent} from "./components/actions/actions.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoardComponent, MatGridList, MatGridTile, CdkPortalOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  tiles: Tile[] = [
    {text: 'Board', cols: 6, rows: 2, color: 'lightblue', componentForPortal: BoardComponent},
    {text: 'Functions', cols: 6, rows: 2, color: 'lightblue', componentForPortal: ActionsComponent},
  ];

  createComponentPortal(component: Type<any>){
    return new ComponentPortal(component);
  }
}
