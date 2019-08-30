import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{User}from '../user';
// import { GithubService } from '../github-service/github.service';
import{GithubRequestService}from'../github-http/github-request.service'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user:User;


  constructor(private http:HttpClient, private githubService:GithubRequestService){
   this
  }
  ngOnInit() {
    interface ApiResponse{
      // user:string;

    }
    this.githubService.githubRequest(prompt)
    this.user=this.githubService.user
  }
   
}
