import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentorship',
  templateUrl: './mentorship.component.html',
  styleUrls: ['./mentorship.component.css']
})
export class MentorshipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  array=[{name:"If you want rapid results",point:"This program requires a lot of unlearning and experimentation which will require patience to get better results over time"},
  {name:"If you want rapid results",point:"This program requires a lot of unlearning and experimentation which will require patience to get better results over time"},
  {name:"If you want rapid results",point:"This program requires a lot of unlearning and experimentation which will require patience to get better results over time"},
  {name:"If you want rapid results",point:"This program requires a lot of unlearning and experimentation which will require patience to get better results over time"}]
}
