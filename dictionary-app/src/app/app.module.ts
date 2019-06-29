import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { ThesaurusComponent } from './components/thesaurus/thesaurus.component';
import { DictionaryService } from './services/dictionary.service';
import { ThesaurusService } from './services/thesaurus.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    DictionaryComponent,
    ThesaurusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DictionaryService,
    ThesaurusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
