import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';

import {
    RouterModule,
    Routes
} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'contactUs', redirectTo: 'contact'},
];

@NgModule({
    declarations: [
        AppComponent
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
