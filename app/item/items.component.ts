import { Component, OnInit } from "@angular/core";
import * as fs from "tns-core-modules/file-system";

@Component({
  selector: "ns-items",
  moduleId: module.id,
  templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
  graphUrl1: string = null;
  graphUrl2: string = null;

  ngOnInit(): void {
    this.renderGraph1();
    this.renderGraph2();
  }

  private renderGraph1(): void {
    const data = {
      xAxisCategories: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
      columnSeriesData: [0, 0, 0, 1, 2, 4, 8, 7, 7, 7, 3, 1, 1, 0, 1, 0, 0],
      lineSeriesData: [null, null, 0, 1, 2, 4, 8, 7, 7, 7, 3, 1, 1, 0, 1, 0, null]
    };
    // Note that when https://github.com/NativeScript/NativeScript/issues/4443 is fixed you can use a relative url (without the 'fs' module)
    this.graphUrl1 = encodeURI(`${fs.knownFolders.currentApp().path}/item/graph/graph.html?${JSON.stringify(data)}`);
  }

  private renderGraph2(): void {
    const data = {
      xAxisCategories: ['6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
      columnSeriesData: [2, 10, 20, 30, 30, 23, 13, 4, -8, 10]
    };
    this.graphUrl2 = encodeURI(`${fs.knownFolders.currentApp().path}/item/graph/graph.html?${JSON.stringify(data)}`);
  }
}