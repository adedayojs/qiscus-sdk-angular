import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { qiscusSdkAngularModule } from 'qiscus-sdk-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './components/sample/sample.component';

@NgModule({
    declarations: [AppComponent, SampleComponent],
    imports: [BrowserModule, AppRoutingModule, qiscusSdkAngularModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
