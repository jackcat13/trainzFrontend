import { Injectable, NgModule } from '@angular/core';
import { CanActivate, Router, RouterModule, Routes } from '@angular/router';
import { TrainingListComponent } from './training-list/training-list.component';
import { LoginComponent } from './login/login.component';
import { DiscordLoginService } from './service/login.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
class AccessGuard implements CanActivate {

  constructor( private loginService: DiscordLoginService, private router: Router ){}

  canActivate() {
    if (this.loginService.isLogged()){
      return true;
    }
    else{
      this.router.navigate(["/login"]);
      return false;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
class LoggedGuard implements CanActivate {

  constructor( private loginService: DiscordLoginService, private router: Router ){}

  canActivate() {
    if (this.loginService.isLogged()){
      this.router.navigate(["/trainings"]);
      return false;
    }
    else{
      return true;
    }
  }
}

const routes: Routes = [
  { path: 'trainings', component: TrainingListComponent, canActivate: [ AccessGuard ] },
  { path: 'login', component: LoginComponent, canActivate: [ LoggedGuard ] },
  { path: '', redirectTo: '/trainings', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }