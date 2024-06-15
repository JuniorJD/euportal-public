import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkspaceComponent } from './workspace.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardContent, MatCardTitle } from '@angular/material/card';

const routes: Routes = [
  { path: '', component: WorkspaceComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatCardContent,
    MatCardTitle
  ]
})
export class WorkspaceModule { }
