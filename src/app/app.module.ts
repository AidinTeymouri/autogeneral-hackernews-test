import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularMaterialModule } from './angular.material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HackerNewsComponent } from './hacker-news/hacker-news.component';
import { HackerNewsListComponent } from './hacker-news/hacker-news-list/hacker-news-list.component';
import { HackerNewsService } from './hacker-news/shared/hacker-news.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HackerNewsListService } from './hacker-news/hacker-news-list/hacker-news-list.service';


@NgModule({
  declarations: [
    AppComponent,
    HackerNewsComponent,
    HackerNewsListComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    NgbModule
  ],
  providers: [HackerNewsService, HackerNewsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
