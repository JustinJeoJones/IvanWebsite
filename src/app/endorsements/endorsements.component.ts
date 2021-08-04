import { Component, OnInit } from '@angular/core';
import { Detail } from '../detail';

@Component({
  selector: 'app-endorsements',
  templateUrl: './endorsements.component.html',
  styleUrls: ['./endorsements.component.css']
})
export class EndorsementsComponent implements OnInit {

  endorsementList:Detail[] = [
    {
      name:"1",
      desc:"2"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
