import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layouts/login/login.component';
import { RegisterComponent } from './layouts/register/register.component';
import { ClassesComponent } from './layouts/classes/classes.component';
import { DevisesComponent } from './layouts/devises/devises.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'devices', component: DevisesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
