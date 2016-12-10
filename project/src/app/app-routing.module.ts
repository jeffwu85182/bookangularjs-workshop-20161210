import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { TablesComponent } from './tables/tables.component';
import { TableDetailComponent } from './table-detail/table-detail.component';

const routes: Routes = [
  { path: 'tables', component: TablesComponent },
  {
    path: 'table',
    children: [
      { path: ':id', component: TableDetailComponent },
      { path: '', redirectTo: '/tables', pathMatch: 'full' }
    ]
  },
  { path: 'history', component: HistoryComponent },
  { path: '', redirectTo: '/tables', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
