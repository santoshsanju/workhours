import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-overview',
  templateUrl: './program-overview.component.html',
  styleUrls: ['./program-overview.component.css']
})
export class ProgramOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  array=[{title1:"Kickoff Week",para:["Learn exactly how to make the most out of this program in 8 weeks.","Get to know the people you are learning with through ice-breaker sessions.","Interact in the community and make friends to learn with for the next 8 weeks."]},
  {title1:"Fundamentals of Growth Hacking",para:["Understanding the fundamentals","Growth Hacking framework","JTBD Framework & Building a persona","Psychographics vs Demographics","OPN Deep dive","Finding competitors","Understanding competitor channels","Piggybacking on competitors data"],title2:"Projects you'll be doing",para2:["Pirate Funnel Mapping","JBDT building for a brand","Build a persona for a brand","Competitor report"]},
  {title1:"Building a Kickass Landing Page that converts",para:["Symmetric Messaging","Copywriting – LIFT model","Building a kickass landing page","Hard vs Soft Data","UTM setup Building a tracking plan","Headline & LP testing","Speed tracking and optimization","Eye-tracking test","Usability test"],title2:"Projects you'll be doing",para2:["Build your landing page by writing copy using the LIFT method","Integrate GA, Pixel, and other tracking codes using GTM","Setup parameters for 4 channels & a basic tracking plan","Perform all the tests on the landing page and optimize the landing page based on test results"]},
  {title1:"Kickoff Week",para:["Learn exactly how to make the most out of this program in 8 weeks.","Get to know the people you are learning with through ice-breaker sessions.","Interact in the community and make friends to learn with for the next 8 weeks."]},
  {title1:"Fundamentals of Growth Hacking",para:["Understanding the fundamentals","Growth Hacking framework","JTBD Framework & Building a persona","Psychographics vs Demographics","OPN Deep dive","Finding competitors","Understanding competitor channels","Piggybacking on competitors data"],title2:"Projects you'll be doing",para2:["Pirate Funnel Mapping","JBDT building for a brand","Build a persona for a brand","Competitor report"]},
  {title1:"Building a Kickass Landing Page that converts",para:["Symmetric Messaging","Copywriting – LIFT model","Building a kickass landing page","Hard vs Soft Data","UTM setup Building a tracking plan","Headline & LP testing","Speed tracking and optimization","Eye-tracking test","Usability test"],title2:"Projects you'll be doing",para2:["Build your landing page by writing copy using the LIFT method","Integrate GA, Pixel, and other tracking codes using GTM","Setup parameters for 4 channels & a basic tracking plan","Perform all the tests on the landing page and optimize the landing page based on test results"]}]
}
