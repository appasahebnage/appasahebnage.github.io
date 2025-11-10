import { initFlowbite } from 'flowbite';

import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ExperienceComponent,
    FooterComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  title = "Appasaheb Nage's Portfolio";

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite();
    }
  }
}
