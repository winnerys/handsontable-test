import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Handsontable
import Handsontable from "handsontable/base";
import { registerAllModules } from "handsontable/registry";
registerAllModules();
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ag-grid-example';
}
