import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Handsomtable
import { HotTableModule } from '@handsontable/angular';
import { registerAllModules } from 'handsontable/registry';

// Tabular
import { TabulatorTableComponent } from './tabulator-table/tabulator-table.component';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';


// App
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabulatorTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Handsometables
    HotTableModule,

    // Material
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
