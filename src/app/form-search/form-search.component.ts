import { Component, OnInit } from '@angular/core';
import { Repouser } from '../repouser';
import { GithubRequestService } from '../github-http/github-request.service';
import { User } from '../user';
import { Repository } from '../repository';


@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {
prompt:string;
pop:User;
repos:Repository[];
  constructor(private githubRequestService:GithubRequestService) { }

  ngOnInit() {
  }
  functionsearch(art){
    this.githubRequestService.githubRequest(art)
    this.pop=this.githubRequestService.user
    this.githubRequestService.repositoryRequest(art)
    this.repos=this.githubRequestService.repository
    console.log(this.repos)
  }
  
}

