import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SelectableTableModule } from 'ad-selectable-table-directives';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SelectableTableModule.forRoot([{
      TABLE_ID: 'table1',
      CELL_SELECTED_CLASSES: ['selected'],
      CELL_SELECTABLE_CLASSES: ['selectable'],
      ROWCELL_SELECTABLE_CLASSES: ['rowSelectable'],
      ROWCELL_SELECTED_CLASSES: ['rowSelected'],
      ROWCELL_PARCIAL_SELECTED_CLASSES: ['rowParcialSelected'],
      COLUMNCELL_SELECTABLE_CLASSES: ['columnSelectable'],
      COLUMNCELL_SELECTED_CLASSES: ['columnSelected'],
      COLUMNCELL_PARCIAL_SELECTED_CLASSES: ['columnParcialSelected'],
    },
    {
      TABLE_ID: '',
      CELL_SELECTED_CLASSES: ['selected'],
      CELL_SELECTABLE_CLASSES: ['selectable'],
      ROWCELL_SELECTABLE_CLASSES: ['rowSelectable'],
      ROWCELL_SELECTED_CLASSES: ['rowSelected'],
      ROWCELL_PARCIAL_SELECTED_CLASSES: ['rowParcialSelected'],
      COLUMNCELL_SELECTABLE_CLASSES: ['columnSelectable'],
      COLUMNCELL_SELECTED_CLASSES: ['columnSelected'],
      COLUMNCELL_PARCIAL_SELECTED_CLASSES: ['columnParcialSelected'],
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
