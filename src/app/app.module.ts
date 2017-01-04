import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';

import {
    RouterModule,
    Routes
} from '@angular/router';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    {path: '', redirectTo: 'search', pathMatch: 'full'},
    {path: 'search', component: 'app-search'},
    {path: 'artists/:id', component: 'app-search'},
    {path: 'albums/:id', component: 'app-search'},
    {path: 'tracks/:id', component: 'app-search'},
];

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
