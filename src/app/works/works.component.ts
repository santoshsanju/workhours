import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  array=[{title:"Application  Process",details:"Fill out the application form to apply for the Program"},
  {title:"Application  Review",details:"Experts review each application selecting only the people who are aligned with our goal and values."},
  {title:"Selection",details:"Successful candidates will receive an email."},
  {title:"Fellowship Kick-off & Onboarding",details:"Welcome to the 6-week madness, to learn, and hit your goals."},
  {title:"Build Relations",details:"Meet & network with your fellows"},
  {title:"Share",details:"Celebrate your deals with the community"}]
}
