import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { NewTourComponent } from './new-tour/new-tour.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTourComponent,
    ToolbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatStepperModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: 'nueva-solicitud', component: NewTourComponent }
    ]),
    HttpClientModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    FormsModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-NI'},
    {provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
