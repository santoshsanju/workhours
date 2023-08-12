import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.css']
})
export class ProgramDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  array=[{name:"Marketers",points:["Transform yourself into a Growth Hacker.","Switch to better higher-paying jobs.","Get countless international opportunities."]},
  {name:"Coaches & Trainers",points:["Fill seats for your courses.","Fast track your way to growth.","Stand out among your competitors."]},
  {name:"Students",points:["Kickstart your career in growth hacking.","Get ahead and cut through your peers.","Stand out among your competitors."]},
  {name:"Product Managers",points:["Boost the adoption of your product.","Become a Product Growth Manager.","Better understand your customers."]},
  {name:"Freelancers",points:["Get world-class clients using growth tactics.","Upskill yourselves and increase your offerings.","Command a higher price in front of your clients."]},
  {name:"Entrepreneurs",points:["Get customers without spending 1000s of $$$","Generate high-quality leads for your business.","Train your marketing team in growth hacking."]},
  {name:"Growth Hackers",points:["Join the Top 1% of growth hackers.","Make a living out of this one skill.","Become a leader in your organization."]},
  {name:"Sales Managers",points:["Become the center of revenue generation.","Upskill yourselves into a better professional.","Get quality customers by building growth loops."]}]

}
