import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TablesComponent } from './tables/tables.component';
import { TableDetailComponent } from './table-detail/table-detail.component';
import { HistoryComponent } from './history/history.component';

import { OrderService } from './order.service';

@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    TableDetailComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
