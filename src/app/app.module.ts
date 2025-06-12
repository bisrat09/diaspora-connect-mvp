import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { HomeComponent } from './pages/home/home.component';
import { ProviderProfileComponent } from './pages/provider-profile/provider-profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProviderCardComponent } from './components/provider-card/provider-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProviderProfileComponent,
    DashboardComponent,
    ProviderCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }