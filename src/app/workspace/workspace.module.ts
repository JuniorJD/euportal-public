import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkspaceComponent } from './workspace.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

const routes: Routes = [
  { path: '', component: WorkspaceComponent }
];

@NgModule({
  declarations: [WorkspaceComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    MatListModule,
  ]
})
export class WorkspaceModule { }
