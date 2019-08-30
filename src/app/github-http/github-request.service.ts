import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  user: User;
  repository: Repository[];
  constructor(private http: HttpClient) {
    this.repository = [];
    this.user = new User("", "", 0);
  }
  githubRequest(prompt) {
    interface ApiResponse {
      login: string,
      avatar_url: string,
      public_repos: number
    };

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/" + prompt + "?access_token=" + environment.key).toPromise().then(response => {
        this.user.login = response.login
        this.user.avatar_url = response.avatar_url
        this.user.public_repos = response.public_repos
        resolve()
      },
        error => {

          reject(error)
        })
    })
    return promise
  }
  repositoryRequest(prompt) {
    interface ApiResponse {
      name: string,
      description: string,
      created_at: Date,
    };

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/" + prompt + "/repos?access_token=" + environment.key).toPromise().then(response => {
        for (var p in response) {
          this.repository.push(new Repository(response[p].name, response[p].description, response[p].created_at));
        }
        // console.log(this.repository)
        resolve()
      },
        error => {

          reject(error)
        })
    })
    return promise
  }







}
