import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);
@Component({
  selector: 'app-ag-grid-test',
  standalone: true,
  imports: [CommonModule, AgGridAngular],
  templateUrl: './ag-grid-test.component.html',
  styleUrls: ['./ag-grid-test.component.css']
})
export class AgGridTestComponent {
  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true},
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "make", editable: true },
    { field: "model", editable: true },
    { field: "price", editable: true },
    { field: "electric", editable: true }
  ];

  defaultColDef: ColDef = {
    editable: true,
    resizable: true,
    sortable: true
  };
}
