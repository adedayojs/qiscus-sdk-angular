import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QiscusSdkAngularModule } from 'qiscus-sdk-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './components/sample/sample.component';

@NgModule({
    declarations: [AppComponent, SampleComponent],
    imports: [BrowserModule, AppRoutingModule, QiscusSdkAngularModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
