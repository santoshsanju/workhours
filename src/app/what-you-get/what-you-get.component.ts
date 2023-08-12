import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-you-get',
  templateUrl: './what-you-get.component.html',
  styleUrls: ['./what-you-get.component.css']
})
export class WhatYouGetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstArray=["60+ Hours of Content","15+ Guest Sessions","8 Live QnA","Premium Growth Hacking community of marketers"]
  secondArray=["Access to a powerful community of Growth Hacking enthusiasts and mentors from top brands.","One year access to the pre-reads, curriculum, and on-demand content.","Exclusive access to physical events and meetups in the community.","Opportunity to connect with Guest Mentors who have fueled growth in multiple million-dollar startups."]
}
