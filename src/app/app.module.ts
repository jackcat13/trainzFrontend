import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingListComponent } from './training-list/training-list.component';
import { LoginComponent } from './login/login.component';
import { DiscordLoginService } from './service/login.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { ExerciseEntryComponent } from './exercise-entry/exercise-entry.component';
import { RefreshButtonComponent } from './refresh-button/refresh-button.component';
import { AnimButtonComponent } from './anim-button/anim-button.component';
import { BorderedTitleModule } from 'jackcat13-ng-bordered-title';
import { BorderedDivModule } from 'jackcat13-ng-bordered-div';
import { BorderedButtonModule } from 'jackcat13-ng-bordered-button';

@NgModule({
  declarations: [
    AppComponent,
    TrainingListComponent,
    LoginComponent,
    UserDetailsComponent,
    SpinnerComponent,
    ExerciseEntryComponent,
    RefreshButtonComponent,
    AnimButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    BorderedTitleModule,
    BorderedDivModule,
    BorderedButtonModule
  ],
  providers: [DiscordLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }