import { Component, ViewChild } from '@angular/core';
import {
  GridSettings,
  HotTableComponent,
  HotTableModule,
} from "@handsontable/angular-wrapper";

@Component({
  selector: 'app-handsontable-test',
  standalone: true,
  imports: [HotTableModule],
  templateUrl: './handsontable-test.component.html',
  styleUrl: './handsontable-test.component.css'
})
export class HandsontableTestComponent {
  @ViewChild(HotTableComponent, { static: false })
  readonly hotTable!: HotTableComponent;

  readonly data = [
    ["DOCUMENT-PID-001", true,  "Status1", "2021-01-01", 10],
    ["DOCUMENT-PID-002", false, "Status2", "2021-01-01", 11],
    ["DOCUMENT-PID-003", false, "Status2", "2021-06-15", 12],
    ["DOCUMENT-PID-004", false, "Status3", "2022-03-03", 13],
  ];

  readonly gridSettings: GridSettings = {
    rowHeaders: true,
    colHeaders: true,
    height: "auto",
    rowHeights: 30,
    autoWrapRow: true,
    autoWrapCol: true,
  
    columns: [
      { title: 'Document No', type: 'text', width: 300},
      { title: 'Check Something', type: 'checkbox', width: 200 },
      { 
        title: 'Document Status',
        type: 'dropdown',
        source: ['Status1', 'Status2', 'Status3'], 
        strict: true,
        width: 300
      },
      {
        title: 'Some Date', 
        type: 'date',
        dateFormat: 'YYYY-MM-DD',
        correctFormat: true
      },
      { title: 'Some Number', type: 'numeric' }
    ]
  };
}
