import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Github } from '../github-class';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  github: Github;
  constructor() { }

  ngOnInit() {
  }
  
 
}
