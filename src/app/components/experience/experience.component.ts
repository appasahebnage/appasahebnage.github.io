import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CompanyExperience, CompanyNames } from './experience.model';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '400ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  @Input() title: string = 'Experience';

  companyExperiences: CompanyExperience[] = [
    {
      companyName: CompanyNames.OptimizeAds,
      location: 'Remote',
      duration: '8 mos',
      logo: 'optimize-ads-icon.png',
      website: 'https://optimizeads.com',
      experiences: [
        {
          position: 'Engineering Manager',
          startDate: 'Mar 2025',
          endDate: 'Present',
          duration: '8 mos',
          points: [
            'Designed monorepo architecture for shared code management and API contract synchronization, improving cross-team collaboration and enabling 70% accurate AI-powered code suggestions',
            'Architected 120+ REST APIs with flexible authorization supporting both JWT tokens and API keys, serving 5K+ daily requests',
            'Led Brand Onboarding initiative using Amazon Ads and Seller Partner APIs, successfully onboarding 20 enterprise brands managing $23M in combined monthly sales volume',
            'Developed AI-driven reporting agents using Vercel AI SDK and Claude API, automating custom report generation and reducing analyst workload from 3 hours to under 30 seconds per report',
            'Built OptimizeAds MCP server enabling AI-powered analysis of campaigns, keywords, and ASINs, improving decision-making speed by 80%',
          ],
        },
      ],
    },
    {
      companyName: CompanyNames.Hypelinks,
      location: 'Remote',
      duration: '1 yrs 2 mos',
      logo: 'hypelinks_logo.jpeg',
      website: 'http://hypelinks.com',
      experiences: [
        {
          position: 'Engineering Manager',
          startDate: 'Nov, 2023',
          endDate: 'Present',
          duration: '1 yrs 2 mos',
          points: [
            'Architected multi-tenant platform backend with separate REST APIs and data models supporting 1,000+ creators and brands with distinct onboarding workflows and authorization patterns',
            'Built custom attribution system tracking Google Ads conversions (gclid) to Amazon sales, enabling accurate ROI measurement for campaigns',
            'Developed and deployed high-performance link shortener (hlink.to) handling 10K+ affiliate link generations monthly with sub-100ms response times and comprehensive click analytics',
            'Implemented automated billing system using Stripe Connect, processing $50K+ monthly invoicing for brands and executing secure fund transfers to 20+ creator accounts with zero payment failures',
            "Built Hypestore platform APIs enabling personalized 'link-in-bio' storefronts with Amazon Multi-Channel Fulfillment (MCF) integration",
            'Developed MCP (Model Context Protocol) server and AI-powered tools for product research',
          ],
        },
      ],
    },
    {
      companyName: CompanyNames.DemandHelm,
      location: 'Remote',
      duration: '3 yrs 8 mos',
      website: 'http://demandhelm.com',
      logo: 'demandhelm_logo.jpeg',
      experiences: [
        {
          position: 'Engineering Manager',
          startDate: 'Apr 2023',
          endDate: 'Oct 2023',
          duration: '7 mos',
          points: [
            'Reduced Amazon-sponsored ads traffic report generation by 30% through automated empty report detection system, saving 100+ analyst hours monthly',
            'Implemented custom rule engine processing 10,000+ conditions across millions of keywords with nested boolean logic, automating bid adjustments and improving campaign ROAS by 25%',
            'Designed day-parting services for 10+ countries, managing automated enable/disable scheduling for 5,000+ campaigns and improving ad effectiveness by 40%',
            'Executed zero-downtime RDS instance upgrade from db.t3.medium to db.r5.xlarge with under 60 seconds of downtime using blue-green deployment strategy',
          ],
        },
        {
          position: 'Senior Software Engineer',
          startDate: 'Apr 2022',
          endDate: 'Mar 2023',
          duration: '1 yrs',
          points: [
            'Designed and implemented a system capable of processing millions of advertising messages per hour to optimize advertising spend and show hourly impressions',
            'Established observability tools to collect traces and metrics, enabling prompt response to potential system outages',
            'Redesigned and improved the DemandHelm sign-up/sign-in process to enhance user experience, loosen coupling, and optimize database IO operations',
            'Implemented and refactored around 55 APIs to power the DemandHelm client',
          ],
        },
        {
          position: 'Software Engineer',
          startDate: 'Mar 2020',
          endDate: 'Mar 2022',
          duration: '2 yrs 1 mos',
          points: [
            'Implemented and managed a system that refreshes advertising performance data every 3 hours, a feature that sets DemandHelm apart from competitors',
            'Optimized system to significantly reduce the waiting time of background processes from 30 minutes to 45 seconds, resulting in a 70% decrease in reporting infrastructure costs',
            'Implemented around 100 APIs to power the DemandHelm client',
          ],
        },
      ],
    },
  ];
}
