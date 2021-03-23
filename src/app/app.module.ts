import { NgrxImplementationStore } from './store/store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestPageComponent } from './test-page/test-page.component';
@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgrxImplementationStore,
    StoreDevtoolsModule.instrument({ maxAge: 25}),
  ],
  providers: [],
  bootstrap: [TestPageComponent]
})
export class AppModule { }
