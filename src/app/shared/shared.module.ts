import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    PageNotFoundComponent,
    AlertComponent,
    NgbModule
  ]
})

export class SharedModule { }
