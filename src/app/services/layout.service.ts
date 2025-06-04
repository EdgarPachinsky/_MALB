import { Injectable } from '@angular/core';
import {TileModel} from "../models/tile.model";
import {BoardComponent} from "../components/board/board.component";
import {ActionsComponent} from "../components/actions/actions.component";

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }

  public tiles: TileModel[] = [
    {id:'board', text: 'Board', cols: 6, rows: 1, color: 'rgb(16 20 20)', componentForPortal: BoardComponent},
    {id:'functions', text: 'Functions', cols: 6, rows: 1, color: 'white', componentForPortal: ActionsComponent},
  ];

  changeLayoutSizes(direction: 'left' | 'right'){
    let board = this.tiles[0];
    let functions = this.tiles[1];

    if(direction === 'left'){
      board.cols -= 1;
      functions.cols += 1;
    }else{
      board.cols += 1;
      functions.cols -= 1;
    }
  }
}
