import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {
    YouTubeSearchComponent,
    SearchBox,
    SearchResultComponent,
    YouTubeService,
    youTubeServiceInjectables
} from './you-tube-search-component/you-tube-search-component.component';

@NgModule({
    declarations: [
        AppComponent,
        YouTubeSearchComponent,
        SearchResultComponent,
        SearchBox
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [
        YouTubeService,
        youTubeServiceInjectables
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
