import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  array=[{name:"When does the mentorship program start?",ans:"This batch of the program will begin on 10th Sept 2023"},
  {name:"Is this a completely live program?",ans:"No. This is a hybrid of on-demand content and live sessions. Every week you will get access to on-demand content. And you can get all your doubts and queries answered in the Q&A sessions."},
  {name:"Do I have lifetime access to the content?",ans:"You will have access to the content for 1 year."},
  {name:"I have a jam-packed schedule and I am not sure if I can make it, what do you suggest?",ans:"You will have access to the on-demand content to watch whenever you want. You will only need to get into the live sessions but even if you can’t make it, we provide all the recordings. So, mostly we expect you to put in 4-6 hours a week to complete the program successfully."}]
}
