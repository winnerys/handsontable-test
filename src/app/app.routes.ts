import { Routes } from '@angular/router';
import { AgGridTestComponent } from './ag-grid-test/ag-grid-test.component';
import { HandsontableTestComponent } from './handsontable-test/handsontable-test.component';

export const routes: Routes = [
    { path: 'ag-grid-test', component: AgGridTestComponent },
    { path: 'handsontable-test', component: HandsontableTestComponent },
];


