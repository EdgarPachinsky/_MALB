import {Type} from "@angular/core";

export interface Tile {
  color: string;
  cols: number;
  rows?: number;
  text: string;
  componentForPortal?: Type<any>;
}
