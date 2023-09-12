import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { CardRepositoryComponent } from './components/card-repository/card-repository.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    ProjectsComponent,
    CardRepositoryComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ComponentsModule
  ]
})
export class ProjectsModule { }
