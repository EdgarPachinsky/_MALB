import {Type} from "@angular/core";

export interface TileModel {
  id: string;
  color: string;
  cols: number;
  rows?: number;
  text: string;
  componentForPortal?: Type<any>;
}
