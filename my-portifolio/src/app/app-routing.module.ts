import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },  
  { 
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'projects',
    loadChildren: () => {
      return import('./projects/projects.module')
      .then((module) => { return module.ProjectsModule})
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
