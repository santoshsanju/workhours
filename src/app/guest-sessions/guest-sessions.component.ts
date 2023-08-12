import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-sessions',
  templateUrl: './guest-sessions.component.html',
  styleUrls: ['./guest-sessions.component.css']
})
export class GuestSessionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  array=[{title:"Video Ads Hacking",img:"https://uploads-ssl.webflow.com/5fedb6496e8146389dc4bd2c/62590eed2c3643604b9a0d29_1620174631816.jpeg",name:"Travis Chambers",designation:"Founder, Chamber.Media"},
  {title:"Ad Creatives",img:"https://uploads-ssl.webflow.com/5fedb6496e8146389dc4bd2c/62590eec0572e992a31fd39a_Nick-Shackelford.jpeg",name:"Nick Shackleford",designation:"CEO - Structured"},
  {title:"UX For Marketers",img:"https://uploads-ssl.webflow.com/5fedb6496e8146389dc4bd2c/62590eeac3fdfd4d8ebfa5c4_1608585657182.jpeg",name:"King Sidharth",designation:"Head of Design - GrowthSchool"},
  {title:"Design Thinking",img:"https://uploads-ssl.webflow.com/5fedb6496e8146389dc4bd2c/62590ee91a29366b93549b23_1605611088745.jpeg",name:"Kshitiz Anand",designation:"Associate Vice President - Design at PayTm"},
  {title:"Email Automation",img:"https://uploads-ssl.webflow.com/5fedb6496e8146389dc4bd2c/62590ee81a33c20686d4f1bf_1623935500760.jpeg",name:"Deepak Kanakaraju",designation:"CEO & Co-Founder, LearnToday"},
  {title:"B2B Growth Marketing",img:"https://uploads-ssl.webflow.com/5fedb6496e8146389dc4bd2c/62590ee78d09ea0e5f7d366f_1569255652437.jpeg",name:"Aadil Bandukwala",designation:"Senior Director of Marketing at HackerRank"},
  {title:"Cold Email Hacking",img:"https://uploads-ssl.webflow.com/5fedb6496e8146389dc4bd2c/62590ee62ae0e1c8609d2f74_1607545191438.jpeg",name:"Bill Stathopoulos",designation:"Director of Strategy & Content - Ad World Conference"},
  {title:"Growth Analytics",img:"https://uploads-ssl.webflow.com/5fedb6496e8146389dc4bd2c/6295bfa70d3c77a0f9a91d7c_varun-p-500.jpeg",name:"Varun Mishra",designation:"Growth & Analytics - Paytm"},
  {title:"SEO Hacking",img:"https://uploads-ssl.webflow.com/5fedb6496e8146389dc4bd2c/62590ee4a696a51abf7021e7_1648576604375.jpeg",name:"Piyush Shah",designation:"Head of SEO - DUKAAN"},
  {title:"Customer Acquisition",img:"https://uploads-ssl.webflow.com/5fedb6496e8146389dc4bd2c/62590e674159d660c5f559ca_1517764463287.jpeg",name:"Vedanarayanan Vedantham",designation:"Marketing Leader - Microsoft, Ex-Razorpay, HealthifyMe"},
  {title:"No-Code AI for Marketing",img:"https://uploads-ssl.webflow.com/5fedb6496e8146389dc4bd2c/62590e664159d63fe7f559c5_1550031784081-p-500.jpeg",name:"Nirman Dave",designation:"CEO - obviously AI"}]
}
