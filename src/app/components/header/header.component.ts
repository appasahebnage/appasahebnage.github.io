import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlowbiteService } from '../../services/flowbite.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  activeSection: string = 'home';
  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      console.log('Flowbite loaded', flowbite);
    });

    // Check initial hash on page load
    this.checkActiveSection();

    // Listen for hash changes
    window.addEventListener('hashchange', () => {
      this.checkActiveSection();
    });
  }

  checkActiveSection() {
    const hash = window.location.hash.slice(1) || 'home';
    this.activeSection = hash;
  }

  scrollTo(elementId: string): void {
    this.activeSection = elementId;
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  // No additional logic needed as RouterModule handles active states
}
