import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  array=[{image:"https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/623df29e09aae14e30ace02a_1621497916373%202.png",name:"Pratik Shigli (Vivan)",designation:"Marketing Manager",brand:"https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/623df47b60a9262ad317d7b1_vauld_logo_light%201.svg",comment:"Got a new job at Vauld and started making videos for Coindcx."},
  {image:"https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/623df2ab6cc638cd9ec4761f_1621497916373%205.png",name:"Akhand Pratap Singh",designation:"Product Manager",brand:"https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/623df47ce0e3aae6f8024a94_Mask%20group%20(1).png",comment:"When I mentioned the traffic growth on their website and few other things in start of the conversation the founder got ready to have next conversation with me. That resulted getting a full time job as a Product Manager even after being a fresher."},
  {image:"https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/623df2aa65ac358ae89f8c27_1621497916373%204.png",name:"Tenaz Cardoz",designation:"Marketing & Communications Specialist",brand:"https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/623df47c559f656063d2d810_Mask%20group.png",comment:"I realized a had a huge skill gap coming from a marcom background, I needed to get updated and the tools and hacks and lessons helped. Not only that, but it's also helping me become a better entrepreneur for my own social cause initiative."},
  {image:"https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/623df2ad1f756a70a33d75ec_1621497916373%206.png",name:"Dr. Sunshil Kumar",designation:"CPR teacher",brand:"https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/623df47b60a9262ad317d7b1_vauld_logo_light%201.svg",comment:"Being in doctor profession, I was totally unaware of the online customer journey. I learnt a lot. I have more clear vision regarding online training system"},
  {image:"https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/623df29e0a8d331a62d3fd8a_1621497916373%203.png",name:"Ramya Anudeep",designation:"Growth & Marketing Director",brand:"https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/623df47ca8c1588f6e13d563_Screenshot%202022-03-22%20at%207%201.png",comment:"Started with zero knowledge in marketing and with zero income. Now became a growth hacker and having an agency , served and serving 30+ clients from the past 11 months with a consistent income of 2 lakhs per month."},
  {image:"https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/623df2aa9662d820bbe7b316_1621497916373%207.png",name:"Shivay Madan",designation:"Webflow Developer for SaaS, eCommerce and Web3 Startups",brand:"https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/623df47c4967083077d79cda_Mask%20group%20(2).png",comment:"I have been freelancing as a Instagram Marketer for 1.5 years+. The growth hacking cohort - i got so much confidence in landing pages and CRO - in just one week of time, I was able to crack and close 3 high ticket clients (worth $2000+/month) at $25/hr , $30/hr jobs. Along with that, I was able to implement those growth hacking strategies for myself as a creator - and help me with email marketing of my Freelancing Ebook to build a list of 2000+ people in just 2 weeks without spending a dime on ads or anything else. Growth Hacking has been life changing for me!"}]
}
