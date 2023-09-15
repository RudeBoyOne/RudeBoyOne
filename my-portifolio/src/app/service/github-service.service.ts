import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { repository } from './models/repositoryModel';
import { user } from './models/userModel';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  private readonly baseUrl: string = 'https://api.github.com/users/RudeBoyOne'

  constructor(
    private http: HttpClient
  ){}

  findUser(): Observable<user> {
    return this.http.get<user>(this.baseUrl);
  }

  findAllRepositories(): Observable<repository[]> {
    return this.http.get<repository[]>(`${this.baseUrl}/repos`);
  }

}
