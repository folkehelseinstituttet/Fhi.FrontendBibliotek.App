import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { MarkdownModule } from 'ngx-markdown';

import { SafePipe } from './pipes/safe.pipe';

import { LibraryMenuLevel1Component } from './library-menu-level-1/library-menu-level-1.component';
import { LibraryMenuLevel2Component } from './library-menu-level-2/library-menu-level-2.component';
import { LibraryExampleDetailComponent } from './library-example-detail/library-example-detail.component';
import { LibraryCopyButtonComponent } from './library-copy-button/library-copy-button.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    SafePipe,
    LibraryMenuLevel1Component,
    LibraryMenuLevel2Component,
    LibraryExampleDetailComponent,
    LibraryCopyButtonComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule,
    ClipboardModule,
    FilterPipeModule,
    MarkdownModule.forRoot()
  ],
  exports: [
    SafePipe,
    LibraryMenuLevel1Component,
    LibraryMenuLevel2Component,
    LibraryExampleDetailComponent,
    LibraryCopyButtonComponent,
    SpinnerComponent,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule,
    ClipboardModule,
    FilterPipeModule,
    MarkdownModule
  ]
})
export class SharedModule { }
