import { Component, OnInit } from '@angular/core';
import { Detail } from '../detail';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  IssueList:Detail[] = [
    {
      name:"1",
      desc:"2"
    },
    {
      name:"3",
      desc:"4"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

