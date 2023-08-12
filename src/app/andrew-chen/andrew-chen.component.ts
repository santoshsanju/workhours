import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-andrew-chen',
  templateUrl: './andrew-chen.component.html',
  styleUrls: ['./andrew-chen.component.css']
})
export class AndrewChenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  array=[{title:"₹18L",para:"Experienced Growth Hackers earn an average of ₹18 Lakhs per annum"},
  {title:"25000+",para:"There are more than 25000 openings for the role of Growth Hackers"},
  {title:"4000+",para:"There are more than 4000 remote opportunities for Growth Hacking"}]
}
