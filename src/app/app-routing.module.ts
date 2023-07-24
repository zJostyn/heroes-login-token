import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes propios
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { InsertComponent } from './components/insert/insert.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component:AboutComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path: 'heroe/:id', component:HeroeComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path: 'heroes', component:HeroesComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path: 'search/:dato', component:SearchComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path: 'insert', component:InsertComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
