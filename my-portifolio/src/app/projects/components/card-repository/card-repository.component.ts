import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from 'src/app/service/github-service.service';
import { repository } from 'src/app/service/models/repositoryModel';

@Component({
  selector: 'app-card-repository',
  templateUrl: './card-repository.component.html',
  styleUrls: ['./card-repository.component.css']
})
export class CardRepositoryComponent implements OnInit {

  myRepositories: repository[] = [];
  
  constructor(
    private githubService: GithubServiceService
  )
  {}


  ngOnInit(): void {
    this.githubService.findAllRepositories().subscribe(
      (repositories) => {
        this.myRepositories = repositories;
      } 
    )
  }
  
  
}
