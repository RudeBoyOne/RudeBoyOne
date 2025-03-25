import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/service/clients.service';
import { GithubServiceService } from 'src/app/service/github-service.service';
import { Clients } from 'src/app/service/models/clients.model';
import { repository } from 'src/app/service/models/repositoryModel';

@Component({
  selector: 'app-card-repository',
  templateUrl: './card-repository.component.html',
  styleUrls: ['./card-repository.component.css']
})
export class CardRepositoryComponent implements OnInit {

  myRepositories: repository[] = [];
  myClients: Clients[] = [];
  
  constructor(
    private githubService: GithubServiceService,
    private clientService: ClientsService
  )
  {}


  ngOnInit(): void {
/*     this.githubService.findAllRepositories().subscribe(
      (repositories) => {
        this.myRepositories = repositories.map(repository => ({
            ...repository,
            full_name: repository.full_name.split('/')[1]
        }));
      } 
    ); */

    this.myClients = this.clientService.findAllClients();
  }
  
  
}
