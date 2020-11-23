import { Component } from '@angular/core';
import { SelectableTableAPI } from 'ad-selectable-table-directives';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SelectableTableDemo';
  tableApi: SelectableTableAPI;
  inputValue: number;
  cellvalue = {
    m: 'p',
    c: 'h'
  }
  // columns: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  // rows: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  columns: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  rows: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor() {

  }
  rowSelected($event) {
    console.log('ROW SELECTED' + $event);
  }
  rowRemoved($event) {
    console.log('ROW REMOVED' + $event);
  }
  columnSelected($event) {
    console.log('COLUMN SELECTED' + $event);
  }
  columnRemoved($event) {
    console.log('COLUMN REMOVED' + $event);
  }
  clear() {
    this.tableApi.clearSelection();
  }
  selectRow(x) {
    this.tableApi.selectRowByIndex(x)
  }
  tableReady($event) {
    this.tableApi = $event;
  }
}
