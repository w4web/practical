import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: TodoComponent }
];

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})

export class TodoModule { }
