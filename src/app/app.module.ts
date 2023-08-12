import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WhatsappBarComponent } from './whatsapp-bar/whatsapp-bar.component';
import { GrowthSchoolComponent } from './growth-school/growth-school.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CohortComponent } from './cohort/cohort.component';
import { ProgramDetailsComponent } from './program-details/program-details.component';
import { MentorshipComponent } from './mentorship/mentorship.component';
import { GrowthHackingComponent } from './growth-hacking/growth-hacking.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AndrewChenComponent } from './andrew-chen/andrew-chen.component';
import { ProgramOverviewComponent } from './program-overview/program-overview.component';
import { InstructedByComponent } from './instructed-by/instructed-by.component';
import { CoMentorsComponent } from './co-mentors/co-mentors.component';
import { GuestSessionsComponent } from './guest-sessions/guest-sessions.component';
import { BrandsComponent } from './brands/brands.component';
import { ProgramWorkComponent } from './program-work/program-work.component';
import { CommunityComponent } from './community/community.component';
import { WorksComponent } from './works/works.component';
import { WhatYouGetComponent } from './what-you-get/what-you-get.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FooterComponent } from './footer/footer.component';
import { ApplyBtnComponent } from './apply-btn/apply-btn.component';
import { UnderlineComponent } from './underline/underline.component';

@NgModule({
  declarations: [
    AppComponent,
    WhatsappBarComponent,
    GrowthSchoolComponent,
    TimelineComponent,
    CohortComponent,
    ProgramDetailsComponent,
    MentorshipComponent,
    GrowthHackingComponent,
    TestimonialsComponent,
    AndrewChenComponent,
    ProgramOverviewComponent,
    InstructedByComponent,
    CoMentorsComponent,
    GuestSessionsComponent,
    BrandsComponent,
    ProgramWorkComponent,
    CommunityComponent,
    WorksComponent,
    WhatYouGetComponent,
    FaqsComponent,
    FooterComponent,
    ApplyBtnComponent,
    UnderlineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
