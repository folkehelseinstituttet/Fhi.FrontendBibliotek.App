import { Component, OnInit, Input } from '@angular/core';

import { LibraryExample } from '../models/library-example.model';
import { NavTab } from './nav-tab.model';

@Component({
  selector: 'app-library-example-detail',
  templateUrl: './library-example-detail.component.html'
})
export class LibraryExampleDetailComponent implements OnInit {

  @Input() libraryExample: LibraryExample;

  title: string;
  id: string;
  exampleHtml: string;
  exampleMarkdown: string;
  documentationMarkdown: string;
  activeNavTab = 0;
  navTabs: NavTab[];

  ngOnInit() {
    this.updateExampleDataFromInput(this.libraryExample);
    this.navTabs = this.createNavTabsArray();
  }

  private updateExampleDataFromInput(example: LibraryExample) {
    this.title = example.title;
    this.id = example.id;
    this.exampleHtml = example.exampleHtml;
    this.exampleMarkdown = this.updateExampleMarkdown(example);
    this.documentationMarkdown = this.updateDocumentationMarkdown(example);
  }

  private updateExampleMarkdown(example: LibraryExample): string {
    if (example.exampleMarkdown !== undefined) {
      return example.exampleMarkdown.trim();
    }
    if (example.exampleHtml !== undefined) {
      return example.exampleHtml.trim();
    }
    return '<!-- exampleMarkdown === undefined -->';
  }

  private updateDocumentationMarkdown(example: LibraryExample): string | undefined {
    if (example.documentationMarkdown !== undefined) {
      return example.documentationMarkdown.trim();
    }
    return undefined;
  }

  private createNavTabsArray(): NavTab[] {
    let n = 0;
    const navTabs: NavTab[] = [];

    navTabs[n] = {
      id: n++,
      title: 'Eksempel',
      content: this.exampleMarkdown
    };
    if (this.documentationMarkdown !== undefined) {
      navTabs[n] = {
        id: n++,
        title: 'Dokumentasjon',
        content: this.documentationMarkdown
      };
    }
    return navTabs;
  }

}
